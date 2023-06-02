import { Logs } from '../proto/genfiles/api_pb';
export declare class ClientApi {
    private baseDir_;
    private fileName_;
    private machineId_;
    private currentBytes_;
    private timer_;
    private resending_;
    constructor(baseDir: string, machineId: string);
    private saveLocally_;
    private processAndDeleteFiles;
    saveSensorProto(proto: Logs.SaveSensorDataRequest): Promise<void>;
    private resend_;
    startBackgroundTask(callback: () => void): Promise<void>;
    stopBackgroundTask(): void;
}
