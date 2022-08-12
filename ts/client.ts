import * as fs from 'fs';
import * as path from 'path';
import {DateTime} from 'luxon';
import * as Log4js from 'log4js';
import fetch from 'node-fetch';
import {Logs} from '../proto/genfiles/api_pb';

// Around 100kB per file.
const BYTE_LIMIT: number = 100 * 1024;

const logger: Log4js.Logger = Log4js.getLogger();

async function fetchContent(url: string, init?: any): Promise<string> {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error('Response is not OK');
  }
  return await response.text();
}

export class ClientApi {
  private baseDir_: string;
  private fileName_: string;
  private machineId_: string;
  private currentBytes_: number;
  private timer_: NodeJS.Timer | null;
  private resending_: boolean;

  constructor(baseDir: string, machineId: string) {
    this.baseDir_ = baseDir;
    this.fileName_ = `${DateTime.now().toMillis()}`;
    this.machineId_ = machineId;
    this.currentBytes_ = 0;
    this.timer_ = null;
    this.resending_ = false;
  }

  private saveLocally_(proto: Logs.ILogs) {
    const buffer: Uint8Array = Logs.Logs.encode(proto).finish();
    fs.appendFileSync(path.join(this.baseDir_, this.fileName_), buffer);
    this.currentBytes_ += buffer.byteLength;

    if (this.currentBytes_ >= BYTE_LIMIT) {
      this.fileName_ = `${DateTime.now().toMillis()}`;
      this.currentBytes_ = 0;
    }
  }

  // Iterate all files and runs the callback function. The callback should return if it succeeds.
  // In that case, the processed file is deleted.
  private async processAndDeleteFiles(
    callback: (proto: Logs.Logs) => Promise<boolean>): Promise<void> {
    const files: fs.Dirent[] = fs.readdirSync(this.baseDir_, {withFileTypes: true});
    for (const file of files) {
      if (!file.isFile()) {
        continue;
      }
      const buffer: Buffer = fs.readFileSync(path.join(this.baseDir_, file.name));
      if (await callback(Logs.Logs.decode(buffer))) {
        fs.unlinkSync(path.join(this.baseDir_, file.name));
      }
    }
  }

  async saveSensorProto(proto: Logs.SaveSensorDataRequest): Promise<void> {
    if (!proto.logs) {
      return;
    }
    try {
      await fetchContent('https://brewery-app.com/api/client/saveSensorProto', {
        method: 'POST',
        timeout: 5 * 1000,
        headers: {'Content-Type': 'application/octet-stream'},
        body: Logs.SaveSensorDataRequest.encode(proto).finish(),
      });
    } catch (e: any) {
      logger.error('Error in saveSensorProto:', e.message);
      this.saveLocally_(proto.logs);
    }
  }

  private resend_(): Promise<void> {
    return this.processAndDeleteFiles(async(logsProto: Logs.Logs): Promise<boolean> => {
      const proto: Logs.SaveSensorDataRequest = Logs.SaveSensorDataRequest.create({
        backfill: true,
        machineId: this.machineId_,
      });
      proto.logs = logsProto;
      await this.saveSensorProto(proto);
      return true;
    });
  }

  // Time consuming, but this task does not block anyting.
  async startBackgroundTask(
    callback: () => void,
  ): Promise<void> {
    this.timer_ = setInterval(async() => {
      if (!this.resending_) {
        this.resending_ = true;
        await this.resend_();
        this.resending_ = false;
        callback();
      }
    }, 10 * 60 * 1000);

    this.resending_ = true;
    await this.resend_();
    this.resending_ = false;
    callback();
  }

  stopBackgroundTask(): void {
    if (this.timer_) {
      clearInterval(this.timer_);
    }
  }
}
