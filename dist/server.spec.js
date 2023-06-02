"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var jest_mock_1 = require("jest-mock");
var luxon_1 = require("luxon");
var api_pb_1 = require("../proto/genfiles/api_pb");
var server_1 = require("./server");
jest.mock('fs');
jest.mock('node-fetch');
describe('ServerApi', function () {
    beforeEach(function () {
        jest.resetAllMocks();
    });
    test('Save and load succeeds', function () {
        var api = new server_1.ServerApi('/nonexistent');
        var log1 = api_pb_1.Logs.Logs.create({
            inkbird: [
                {
                    deviceId: 'deviceId',
                    unixtime: 1660058286,
                    temperatureE2: 3000,
                    humidityE2: 8000,
                    batteryPercent: 90,
                }
            ]
        });
        var log2 = api_pb_1.Logs.Logs.create({
            inkbird: [
                {
                    deviceId: 'deviceId',
                    unixtime: 1660058286,
                    temperatureE2: 3000,
                    humidityE2: 8000,
                    batteryPercent: 90,
                }
            ]
        });
        // Save the data.
        api.save(log1);
        api.save(log2);
        // These field are not saved on disk to save space.
        delete log1.inkbird[0].deviceId;
        delete log2.inkbird[0].deviceId;
        expect(fs_1.default.appendFileSync).toBeCalledTimes(2);
        expect(fs_1.default.appendFileSync).toBeCalledWith('/nonexistent/inkbird/deviceId/2022-08-10', api_pb_1.Logs.Logs.encode(log1).finish());
        expect(fs_1.default.appendFileSync).toBeCalledWith('/nonexistent/inkbird/deviceId/2022-08-10', api_pb_1.Logs.Logs.encode(log2).finish());
        // Load the data.
        (0, jest_mock_1.mocked)(fs_1.default.readFileSync).mockReturnValue(Buffer.concat([
            api_pb_1.Logs.Logs.encode(log1).finish(),
            api_pb_1.Logs.Logs.encode(log2).finish(),
        ]));
        var loadedLog = api.load('inkbird', luxon_1.DateTime.local(2022, 8, 10));
        expect(loadedLog.inkbird.length).toBe(2);
    });
});
