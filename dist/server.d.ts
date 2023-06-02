import { DateTime } from 'luxon';
import { Logs } from '../proto/genfiles/api_pb';
export declare class ServerApi {
    private baseDir_;
    constructor(baseDir: string);
    save(proto: Logs.ILogs): void;
    load(type: keyof Logs.ILogs, date: DateTime): Logs.Logs;
}
