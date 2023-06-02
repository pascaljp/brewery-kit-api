"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var jest_mock_1 = require("jest-mock");
var node_fetch_1 = __importDefault(require("node-fetch"));
var luxon_1 = require("luxon");
var api_pb_1 = require("../proto/genfiles/api_pb");
var client_1 = require("./client");
var Response = jest.requireActual('node-fetch').Response;
jest.mock('fs');
jest.mock('node-fetch');
describe('ClientApi', function () {
    beforeAll(function () {
        var now = luxon_1.DateTime.local(2022, 8, 10);
        luxon_1.Settings.now = function () { return now.toMillis(); };
    });
    beforeEach(function () {
        jest.resetAllMocks();
    });
    test('RPC succeeds', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, log;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, jest_mock_1.mocked)(node_fetch_1.default).mockResolvedValue(new Response('content'));
                    api = new client_1.ClientApi('/nonexistent', 'machineId');
                    log = api_pb_1.Logs.SaveSensorDataRequest.create({
                        logs: {
                            inkbird: [
                                {
                                    deviceId: 'deviceId1',
                                    unixtime: 1,
                                    temperatureE2: 3000,
                                    humidityE2: 8000,
                                    batteryPercent: 90,
                                },
                                {
                                    deviceId: 'deviceId2',
                                    unixtime: 1,
                                    temperatureE2: 30,
                                    humidityE2: 80,
                                    batteryPercent: 90,
                                },
                            ]
                        }
                    });
                    return [4 /*yield*/, api.saveSensorProto(log)];
                case 1:
                    _a.sent();
                    expect(node_fetch_1.default).toBeCalledTimes(1);
                    expect(node_fetch_1.default).toBeCalledWith('https://brewery-app.com/api/client/saveSensorProto', {
                        method: 'POST',
                        timeout: 5 * 1000,
                        headers: { 'Content-Type': 'application/json' },
                        body: api_pb_1.Logs.SaveSensorDataRequest.encode(log).finish(),
                    });
                    expect(fs_1.default.appendFileSync).toBeCalledTimes(0);
                    return [2 /*return*/];
            }
        });
    }); });
    test('RPC fails and save to local storage', function () { return __awaiter(void 0, void 0, void 0, function () {
        var now, api, log;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Failed to save on server.
                    (0, jest_mock_1.mocked)(node_fetch_1.default).mockRejectedValueOnce(new Error('some error'));
                    now = luxon_1.DateTime.local(2022, 8, 10);
                    luxon_1.Settings.now = function () { return now.toMillis(); };
                    api = new client_1.ClientApi('/nonexistent', 'machineId');
                    log = api_pb_1.Logs.SaveSensorDataRequest.create({
                        logs: {
                            inkbird: [
                                {
                                    deviceId: 'deviceId1',
                                    unixtime: 1,
                                    temperatureE2: 3000,
                                    humidityE2: 8000,
                                    batteryPercent: 90,
                                },
                                {
                                    deviceId: 'deviceId2',
                                    unixtime: 1,
                                    temperatureE2: 30,
                                    humidityE2: 80,
                                    batteryPercent: 90,
                                },
                            ]
                        }
                    });
                    return [4 /*yield*/, api.saveSensorProto(log)];
                case 1:
                    _a.sent();
                    expect(fs_1.default.appendFileSync).toBeCalledTimes(1);
                    expect(fs_1.default.appendFileSync).toBeCalledWith('/nonexistent/1660057200000', api_pb_1.Logs.Logs.encode(log.logs).finish());
                    return [2 /*return*/];
            }
        });
    }); });
});
// class FakeDirent extends fs.Dirent {
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }
//   isFile() {
//     return true;
//   }
// }
