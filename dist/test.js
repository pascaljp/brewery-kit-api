"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_pb_1 = require("../proto/genfiles/api_pb");
var fs = __importStar(require("fs"));
var a = api_pb_1.Logs.SaveSensorDataRequest.create({
    backfill: true,
    machineId: 'machineId',
    logs: {
        inkbird: [
            {
                unixtime: 123,
                deviceId: 'deviceId',
                temperatureE2: 3000,
                humidityE2: 8000,
                batteryPercent: 90,
            }
        ]
    }
});
console.log(api_pb_1.Logs.SaveSensorDataRequest.encode(a).finish());
fs.writeFileSync('/tmp/pascal-test', api_pb_1.Logs.SaveSensorDataRequest.encode(a).finish());
