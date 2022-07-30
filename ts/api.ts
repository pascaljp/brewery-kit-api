import * as fs from 'fs';
import * as Log4js from 'log4js';
import AsyncLock from 'async-lock';
import * as Path from 'path';
import fetch from 'node-fetch';
import moment from 'moment';
// import {mocked} from 'jest-mock';

const logger: Log4js.Logger = Log4js.getLogger();

class LocalCacheEntry {
  public start: number;
  public end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

class LocalCache<T> {
  private file_path_: string;
  private file_content_: string;
  private lock_: AsyncLock;

  constructor(filePath: string) {
    this.file_path_ = filePath;
    this.file_content_ = '';
    this.lock_ = new AsyncLock({timeout: 3000});
  }

  async save(data: T): Promise<void> {
    try {
      await this.lock_.acquire('disk_lock', () => {
        try {
          fs.appendFileSync(this.file_path_, JSON.stringify(data) + '\n');
          logger.warn('Logged to local file.');
        } catch (err) {
          logger.error('Failed to append to file:', JSON.stringify(data), err);
        }
      });
    } catch (err) {
      console.error('error');
      logger.error('Failed to acquire lock:', err, JSON.stringify(data));
    }
  }

  load(): LocalCacheEntry[] {
    // const f = mocked(fs.readFileSync).getMockImplementation();
    // if (f) {
    //   console.log(f('', {}));
    // }
    this.file_content_ = fs.readFileSync(this.file_path_, {encoding: 'utf8'});
    console.log(this.file_path_);
    console.log(this.file_content_);
    const entries: LocalCacheEntry[] = [];
    let position = 0;
    do {
      const newline_char_position = this.file_content_.indexOf('\n', position);
      if (newline_char_position == -1) {
        entries.push(new LocalCacheEntry(position, this.file_content_.length));
        break;
      } else {
        entries.push(new LocalCacheEntry(position, newline_char_position));
      }
      position = newline_char_position + 1;
    } while (position < this.file_content_.length);
    console.log(entries);
    return entries;
  }

  get(entry: LocalCacheEntry): T | null {
    const data: string = this.file_content_.substring(entry.start, entry.end);
    console.log(`[${data}]`);
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }

  delete(entry: LocalCacheEntry): void {
    const fd: number = fs.openSync(this.file_path_, 'r+');
    fs.writeSync(fd, ' '.repeat(entry.end - entry.start), entry.start);
    fs.closeSync(fd);
  }
}

interface InkbirdData {
  deviceId: string;
  unixtime: number;
  temperature: number;
  humidity: number;
  battery: number;
  probeType: number;
}

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
  private filePath_: string;
  private resending_: boolean;
  private local_cache_: LocalCache<InkbirdData>;
  private timer_: NodeJS.Timer | null;

  constructor(tmpdir: string, machineId: string) {
    this.tempDir_ = tmpdir;
    this.machineId_ = machineId;
    this.filePath_ = Path.join(this.tempDir_, '' + moment().unix());
    this.resending_ = false;
    this.local_cache_ = new LocalCache(this.filePath_);
    this.timer_ = null;

    fs.mkdirSync(this.tempDir_, {recursive: true});
  }

  getFilePath(): string {
    return this.filePath_;
  }

  // Time consuming, but this task does not block anyting.
  async startBackgroundTask(callback: () => void): Promise<void> {
    this.timer_ = setInterval(() => {
      this.resendWholeData_(callback);
    }, 10 * 60 * 1000);
    return this.resendWholeData_(callback);
  }

  stopBackgroundTask(): void {
    if (this.timer_) {
      clearInterval(this.timer_);
    }
  }

  // The returned Promise always resolves.
  async saveInkbirdData(data: InkbirdData[], isBackfill: boolean): Promise<void> {
    const params: {machineId: string; data: InkbirdData[]; backfill: boolean} = {
      machineId: this.machineId_,
      data: data,
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

  // The returned Promise always resolves.
  private async saveToDisk_(data: InkbirdData[]): Promise<void> {
    for (const entry of data) {
      await this.local_cache_.save(entry);
    }
  }

  private async resendWholeData_(callback: () => void): Promise<void> {
    if (this.resending_) {
      return;
    }
    this.resending_ = true;
    const files: fs.Dirent[] = fs.readdirSync(this.tempDir_, {withFileTypes: true});

    // New data will be stored to a new file.
    this.filePath_ = Path.join(this.tempDir_, '' + moment().unix());

    for (const file of files) {
      if (!file.isFile()) {
        continue;
      }
      const file_path: string = Path.join(this.tempDir_, file.name);
      const local_cache: LocalCache<InkbirdData> = new LocalCache(file_path);
      const entries: LocalCacheEntry[] = local_cache.load();
      const bucket_length = Math.ceil(entries.length / 100);
      // Entries are bucketed into groups. Each group has at most 100 entries.
      const buckets: LocalCacheEntry[][] = new Array(bucket_length).fill([]).map((_, i) =>
        entries.slice(i * 100, (i + 1) * 100)
      );
      console.log(buckets);
      for (const bucket of buckets) {
        console.log(bucket);
        const buffer: InkbirdData[] = [];
        for (const entry of bucket) {
          console.log(entry);
          const data: InkbirdData | null = local_cache.get(entry);
          console.log(data);
          if (data) {
            buffer.push(data);
          }
        }
        await this.saveInkbirdData(buffer, /*isBackfill=*/ true);
        for (const entry of bucket) {
          local_cache.delete(entry);
        }
      }
      fs.unlinkSync(file_path);
    }
    this.resending_ = false;
    callback();
  }
}

export {BreweryKitApi, InkbirdData};
