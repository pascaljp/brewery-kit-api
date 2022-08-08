import * as fs from 'fs';
import * as Path from 'path';
import * as Log4js from 'log4js';
import AsyncLock from 'async-lock';
import fetch from 'node-fetch';
import moment from 'moment';
import {Logs} from '../proto/genfiles/api_pb';

const logger: Log4js.Logger = Log4js.getLogger();

// [inkbird, powerMeter, netatmo]
const LogFields: (keyof Logs.ILogs)[] =
  Object.keys(Logs.Logs.toObject(
    Logs.Logs.create({}), {defaults: true})) as (keyof Logs.ILogs)[];

class LocalCacheEntry<T> {
  private filePath_: string;
  private fileContent_: string;
  private start_: number;
  private end_: number;

  constructor(
    filePath_: string,
    fileContent_: string,
    start: number,
    end: number
  ) {
    this.filePath_ = filePath_;
    this.fileContent_ = fileContent_;
    this.start_ = start;
    this.end_ = end;
  }

  get(): T | null {
    const data: string = this.fileContent_.substring(this.start_, this.end_);
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }

  delete(): void {
    const fd: number = fs.openSync(this.filePath_, 'r+');
    fs.writeSync(fd, ' '.repeat(this.end_ - this.start_), this.start_);
    fs.closeSync(fd);
  }
}

class LocalCacheWriter<T> {
  private baseDir_: string;
  private fileName_: string;
  private lock_: AsyncLock;

  constructor(baseDir: string, fileName: string) {
    this.baseDir_ = baseDir;
    this.fileName_ = fileName;
    this.lock_ = new AsyncLock({timeout: 3000});
  }

  async save(data: T): Promise<void> {
    try {
      await this.lock_.acquire('disk_lock', () => {
        try {
          fs.appendFileSync(
            Path.join(this.baseDir_, this.fileName_),
            JSON.stringify(data) + '\n'
          );
          logger.warn('Logged to local file.');
        } catch (err) {
          logger.error('Failed to append to file:', JSON.stringify(data), err);
        }
      });
    } catch (err) {
      logger.error('Failed to acquire lock:', err, JSON.stringify(data));
    }
  }

  async saveProto(proto: Logs.SaveSensorDataRequest): Promise<void> {
    if (!proto.logs) {
      return;
    }
    const logs: Logs.ILogs = proto.logs;
    try {
      await this.lock_.acquire('disk_lock', () => {
        for (const fieldName of LogFields) {
          if (!logs[fieldName]) {
            continue;
          }
          const protoToSave = Logs.Logs.create({});
          protoToSave[fieldName] = logs[fieldName]!;
          const buffer = Logs.Logs.encode(protoToSave).finish();
          try {
            fs.appendFileSync(
              Path.join(this.baseDir_, fieldName, this.fileName_),
              buffer
            );
            logger.warn('Logged to local file.');
          } catch (err) {
            logger.error(
              'Failed to append to file:',
              JSON.stringify(Logs.SaveSensorDataRequest.toObject(proto)),
              err
            );
          }
        };
      });
    } catch (err) {
      logger.error(
        'Failed to acquire lock:',
        err,
        JSON.stringify(Logs.SaveSensorDataRequest.toObject(proto))
      );
    }
  }
}
class LocalCacheReader<T> {
  private filePath_: string;
  private fileContent_: string;

  constructor(filePath: string) {
    this.filePath_ = filePath;
    this.fileContent_ = '';
  }

  load(): LocalCacheEntry<T>[] {
    this.fileContent_ = fs.readFileSync(this.filePath_, {encoding: 'utf8'});
    const entries: LocalCacheEntry<T>[] = [];
    let position = 0;
    do {
      const newlineCharPosition = this.fileContent_.indexOf('\n', position);
      if (newlineCharPosition === -1) {
        entries.push(
          new LocalCacheEntry<T>(
            this.filePath_,
            this.fileContent_,
            position,
            this.fileContent_.length
          )
        );
        break;
      } else {
        entries.push(
          new LocalCacheEntry<T>(
            this.filePath_,
            this.fileContent_,
            position,
            newlineCharPosition
          )
        );
      }
      position = newlineCharPosition + 1;
    } while (position < this.fileContent_.length);
    return entries;
  }
}

interface InkbirdData {
  deviceId: string;
  unixtime: number;
  temperature: number;
  humidity: number;
  battery: number;
}

type SaveSensorDataRequestType = {
  backfill?: boolean;
  machineId?: string;

  power_meter?: {
    deviceId?: string;
    unixtime: number;
    watt: number;
  }[];
  netatmo?: {
    deviceId?: string;
    unixtime: number;
    temperature: number;
    humidity: number;
    co2Level: number;
    airPressure: number;
    noiseLevel: number;
  }[];
  inkbird?: InkbirdData[];
};

type SaveInkbirdDataRequestType = {
  backfill?: boolean;
  machineId?: string;
  data: InkbirdData[];
};

async function fetchContent(url: string, init?: any): Promise<string> {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error('Response is not OK');
  }
  return await response.text();
}

// A class that sends data to brewery-kit server.
class BreweryKitApi {
  private tempDir_: string;
  private machineId_: string;
  private resending_: boolean;
  private localCacheWriter_: LocalCacheWriter<InkbirdData>;
  private timer_: NodeJS.Timer | null;

  constructor(tmpdir: string, machineId: string) {
    this.tempDir_ = tmpdir;
    this.machineId_ = machineId;
    this.resending_ = false;
    this.localCacheWriter_ = new LocalCacheWriter(
      this.tempDir_,
      '' + moment().unix()
    );
    this.timer_ = null;

    fs.mkdirSync(this.tempDir_, {recursive: true});
  }

  // Time consuming, but this task does not block anyting.
  async startBackgroundTask(
    callback: () => void,
    resendText: boolean = true,
    resendProto: boolean = false
  ): Promise<void> {
    this.timer_ = setInterval(async() => {
      if (!this.resending_) {
        this.resending_ = true;
        await Promise.all([
          resendText ? this.resendWholeData_() : Promise.resolve(),
          resendProto ? this.resendWholeProto_() : Promise.resolve(),
        ]);
        this.resending_ = false;
        callback();
      }
    }, 10 * 60 * 1000);

    this.resending_ = true;
    await Promise.all([
      resendText ? this.resendWholeData_() : Promise.resolve(),
      resendProto ? this.resendWholeProto_() : Promise.resolve(),
    ]);
    this.resending_ = false;
    callback();
  }

  stopBackgroundTask(): void {
    if (this.timer_) {
      clearInterval(this.timer_);
    }
  }

  // The returned Promise always resolves.
  async saveInkbirdData(
    data: InkbirdData[],
    isBackfill: boolean
  ): Promise<void> {
    const params: {
      machineId: string;
      data: InkbirdData[];
      backfill: boolean;
    } = {
      machineId: this.machineId_,
      data,
      backfill: isBackfill,
    };
    try {
      await fetchContent('https://brewery-app.com/api/client/saveInkbirdData', {
        method: 'POST',
        timeout: 5 * 1000,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(params),
      });
    } catch (e: any) {
      logger.error('Error in saveInkbirdData:', e.message);
      return this.saveToDisk_(data);
    }
  }

  static splitSensorProto(
    data: Logs.SaveSensorDataRequest,
    batchSize: number = 512
  ): Logs.SaveSensorDataRequest[] {
    const sourceData: any = Logs.SaveSensorDataRequest.toObject(data);
    const splittedProto = [];
    for (const fieldName of Object.keys(sourceData.logs)) {
      const logEntries: any[] = sourceData.logs[fieldName];
      for (let start = 0; start < logEntries.length; start += batchSize) {
        const partialData = logEntries.slice(
          start,
          Math.min(start + batchSize, logEntries.length)
        );
        const obj: any = {
          backfill: data.backfill,
          machineId: data.machineId,
          logs: {},
        };
        obj.logs[fieldName] = partialData;
        const proto: Logs.SaveSensorDataRequest =
          Logs.SaveSensorDataRequest.create(obj);
        splittedProto.push(proto);
      }
    }
    return splittedProto;
  }

  async saveSensorProto(proto: Logs.SaveSensorDataRequest): Promise<void> {
    const slicedProtos: Logs.SaveSensorDataRequest[] =
      BreweryKitApi.splitSensorProto(proto, /* batchSize= */ 512);
    for (const slicedProto of slicedProtos) {
      await this.saveSensorProto_(slicedProto);
    }
  }

  private async saveSensorProto_(proto: Logs.SaveSensorDataRequest) {
    try {
      await fetchContent('https://brewery-app.com/api/client/saveSensorProto', {
        method: 'POST',
        timeout: 5 * 1000,
        headers: {'Content-Type': 'application/json'},
        body: Logs.SaveSensorDataRequest.encode(proto).finish(),
      });
    } catch (e: any) {
      logger.error('Error in saveSensorData:', e.message);
      await this.saveSensorProtoLocally(proto);
    }
  }

  async saveSensorProtoLocally(proto: Logs.SaveSensorDataRequest) {
    await this.localCacheWriter_.saveProto(proto);
  }

  async saveSensorData(
    params: SaveSensorDataRequestType
  ): Promise<void> {
    try {
      await fetchContent('https://brewery-app.com/api/client/saveSensorData', {
        method: 'POST',
        timeout: 5 * 1000,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(params),
      });
    } catch (e: any) {
      logger.error('Error in saveSensorData:', e.message);
      // return this.saveToDisk_(params);
    }
  }

  // The returned Promise always resolves.
  private async saveToDisk_(data: InkbirdData[]): Promise<void> {
    for (const entry of data) {
      await this.localCacheWriter_.save(entry);
    }
  }

  private async resendWholeData_(): Promise<void> {
    const files: fs.Dirent[] = fs.readdirSync(this.tempDir_, {
      withFileTypes: true,
    });

    // New data will be stored to a new file.
    this.localCacheWriter_ = new LocalCacheWriter(
      this.tempDir_,
      '' + moment().unix()
    );

    for (const file of files) {
      if (!file.isFile()) {
        continue;
      }
      const filePath: string = Path.join(this.tempDir_, file.name);
      const localCache: LocalCacheReader<InkbirdData> =
        new LocalCacheReader(filePath);
      const entries: LocalCacheEntry<InkbirdData>[] =
        localCache.load();
      const bucketLength = Math.ceil(entries.length / 100);
      // Entries are bucketed into groups. Each group has at most 100 entries.
      const buckets: LocalCacheEntry<InkbirdData>[][] = new Array(
        bucketLength
      )
        .fill([])
        .map((_, i) => entries.slice(i * 100, (i + 1) * 100));
      for (const bucket of buckets) {
        const buffer: InkbirdData[] = [];
        for (const entry of bucket) {
          const data: InkbirdData | null = entry.get();
          if (data) {
            buffer.push(data);
          }
        }
        await this.saveInkbirdData(buffer, /* isBackfill= */ true);
        for (const entry of bucket) {
          entry.delete();
        }
      }
      fs.unlinkSync(filePath);
    }
  }

  private async resendWholeProto_(): Promise<void> {
    // New data will be stored to a new file.
    this.localCacheWriter_ = new LocalCacheWriter(
      this.tempDir_,
      '' + moment().unix()
    );

    const subDirs: (keyof Logs.ILogs)[] = LogFields;
    for (const subDir of subDirs) {
      let files: fs.Dirent[] = [];
      try {
        files = fs.readdirSync(Path.join(this.tempDir_, subDir), {
          withFileTypes: true,
        });
      } catch {
        continue;
      }
      for (const file of files) {
        if (!file.isFile()) {
          continue;
        }
        const proto: Logs.SaveSensorDataRequest =
          Logs.SaveSensorDataRequest.create({
            backfill: true,
            machineId: this.machineId_,
            logs: {},
          });
        const filePath: string = Path.join(this.tempDir_, subDir, file.name);
        const buffer: Buffer = fs.readFileSync(filePath);
        proto.logs! = Logs.Logs.decode(buffer);
        await this.saveSensorProto(proto);
        fs.unlinkSync(filePath);
      }
    }
  }
}

export {BreweryKitApi, InkbirdData, SaveInkbirdDataRequestType, SaveSensorDataRequestType};
