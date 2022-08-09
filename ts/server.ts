import * as fs from 'fs';
import * as path from 'path';
import {DateTime} from 'luxon';
import {Logs} from '../proto/genfiles/api_pb';

// [inkbird, powerMeter, netatmo]
const FieldNames: (keyof Logs.ILogs)[] =
  Object.keys(Logs.Logs.toObject(
    Logs.Logs.create({}), {defaults: true})) as (keyof Logs.ILogs)[];

export class ServerApi {
  private baseDir_: string;

  constructor(baseDir: string) {
    this.baseDir_ = baseDir;
  }

  save(proto: Logs.Logs) {
    const protos: {[fieldName: string]: {[deviceId: string]: {[date: string]: Logs.Logs}}} = {};
    for (const fieldName of FieldNames) {
      for (const entry of proto[fieldName]) {
        const entryTime: DateTime = DateTime.fromSeconds(entry.unixtime!, {zone: 'Asia/Tokyo'});
        const entryDate: string = entryTime.toFormat('yyyy-LL-dd');
        if (!entry.deviceId) {
          continue;
        }
        const deviceId: string = entry.deviceId;

        if (!(fieldName in protos)) {
          protos[fieldName] = {};
        }
        if (!(deviceId in protos[fieldName]!)) {
          protos[fieldName]![deviceId] = {};
        }
        if (!(entryDate in protos[fieldName]![deviceId]!)) {
          protos[fieldName]![deviceId]![entryDate] = Logs.Logs.create();
        }
        protos[fieldName]![deviceId]![entryDate]![fieldName].push(entry);
      }
    }
    for (const fieldName of Object.keys(protos)) {
      for (const deviceId of Object.keys(protos[fieldName]!)) {
        for (const entryDate of Object.keys(protos[fieldName]![deviceId]!)) {
          const filePath = path.join(this.baseDir_, fieldName, deviceId, entryDate);
          const buffer: Uint8Array =
            Logs.Logs.encode(protos[fieldName]![deviceId]![entryDate]!).finish();
          fs.appendFileSync(filePath, buffer);
        }
      }
    }
  }

  load(type: keyof Logs.ILogs, date: DateTime): Logs.Logs {
    const entryDate: string = date.toFormat('yyyy-MM-dd');
    const filePath = path.join(this.baseDir_, type, entryDate);
    const buffer: Buffer = fs.readFileSync(filePath);
    return Logs.Logs.decode(buffer);
  }
}