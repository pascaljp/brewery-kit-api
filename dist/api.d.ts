interface InkbirdData {
    deviceId: string;
    unixtime: number;
    temperature: number;
    humidity: number;
    battery: number;
}
declare type SaveSensorDataRequestType = {
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
declare type SaveInkbirdDataRequestType = {
    backfill?: boolean;
    machineId?: string;
    data: InkbirdData[];
};
declare class BreweryKitApi {
    private dataDir_;
    private machineId_;
    private resending_;
    private localCacheWriter_;
    private timer_;
    constructor(dataDir: string, machineId: string);
    startBackgroundTask(callback: () => void): Promise<void>;
    stopBackgroundTask(): void;
    saveInkbirdData(data: InkbirdData[], isBackfill: boolean): Promise<void>;
    saveSensorData(params: SaveSensorDataRequestType): Promise<void>;
    private saveToDisk_;
    private resendWholeData_;
}
export { BreweryKitApi, InkbirdData, SaveInkbirdDataRequestType, SaveSensorDataRequestType };
