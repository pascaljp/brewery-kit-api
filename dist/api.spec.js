"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var node_fetch_1 = __importStar(require("node-fetch"));
var luxon_1 = require("luxon");
var api_1 = require("./api");
jest.mock('fs');
jest.mock('node-fetch');
// function buildBuffer(logProtoArray: Logs.Logs[]): Buffer {
//   const buffers: Uint8Array[] = [];
//   for (const logProto of logProtoArray) {
//     buffers.push(Buffer.from(Logs.Logs.encode(logProto).finish()));
//   }
//   return Buffer.concat(buffers);
// }
describe('Api', function () {
    beforeAll(function () {
        var now = luxon_1.DateTime.local(2020, 1, 1).setZone('Asia/Tokyo');
        luxon_1.Settings.now = function () { return now.toMillis(); };
    });
    beforeEach(function () {
        jest.resetAllMocks();
    });
    test('Mocking fs', function () {
        (0, jest_mock_1.mocked)(fs_1.default.readFileSync).mockReturnValue('content');
        var a = fs_1.default.readFileSync('/tmp/foo');
        expect(a).toEqual('content');
    });
    test('Mocking fetch', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, jest_mock_1.mocked)(node_fetch_1.default).mockReturnValue(Promise.resolve(new node_fetch_1.Response('ng', { status: 200 })));
                    return [4 /*yield*/, (0, node_fetch_1.default)('http://example.com')];
                case 1:
                    _a.sent();
                    expect(node_fetch_1.default).toHaveBeenCalledTimes(1);
                    expect(node_fetch_1.default).toBeCalledWith('http://example.com');
                    return [2 /*return*/];
            }
        });
    }); });
    test('BreweryKitApi.saveInkbirdData saveToLocalCache', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Failed to save on server.
                    (0, jest_mock_1.mocked)(node_fetch_1.default).mockReturnValue(Promise.reject(new Error('error')));
                    // No local cache at this point.
                    (0, jest_mock_1.mocked)(fs_1.default.readFileSync).mockReturnValueOnce('');
                    api = new api_1.BreweryKitApi('/non_existent_dir', 'testMachineId');
                    return [4 /*yield*/, api.saveInkbirdData([
                            {
                                deviceId: 'deviceId1',
                                unixtime: 1,
                                temperature: 30,
                                humidity: 80,
                                battery: 90,
                            },
                            {
                                deviceId: 'deviceId2',
                                unixtime: 1,
                                temperature: 30,
                                humidity: 80,
                                battery: 90,
                            },
                        ], false)];
                case 1:
                    _a.sent();
                    expect(fs_1.default.appendFileSync).toBeCalledTimes(2);
                    expect(fs_1.default.appendFileSync).toBeCalledWith('/non_existent_dir/1577804400', '{"deviceId":"deviceId1","unixtime":1,"temperature":30,"humidity":80,"battery":90}\n');
                    expect(fs_1.default.appendFileSync).toBeCalledWith('/non_existent_dir/1577804400', '{"deviceId":"deviceId2","unixtime":1,"temperature":30,"humidity":80,"battery":90}\n');
                    return [2 /*return*/];
            }
        });
    }); });
    test('BreweryKitApi.saveInkbirdData resendToServer', function () { return __awaiter(void 0, void 0, void 0, function () {
        var entry1, entry2, api;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Setup local cache.
                    (0, jest_mock_1.mocked)(fs_1.default.readdirSync).mockReturnValue([new FakeDirent('file1')]);
                    entry1 = '{"deviceId":"deviceId1","unixtime":1,"temperature":30,"humidity":80,"battery":90}';
                    entry2 = '{"deviceId":"deviceId2","unixtime":1,"temperature":30,"humidity":80,"battery":90}';
                    (0, jest_mock_1.mocked)(fs_1.default.readFileSync).mockReturnValue(entry1 + '\n' + entry2 + '\n');
                    // Save to server.
                    (0, jest_mock_1.mocked)(node_fetch_1.default).mockReturnValue(Promise.resolve(new node_fetch_1.Response('response')));
                    api = new api_1.BreweryKitApi('/non_existent_dir', 'testMachineId');
                    return [4 /*yield*/, api.startBackgroundTask(function () {
                            api.stopBackgroundTask();
                        })];
                case 1:
                    _a.sent();
                    expect(fs_1.default.readdirSync).toBeCalledTimes(1);
                    expect(fs_1.default.readFileSync).toBeCalledTimes(1);
                    expect(node_fetch_1.default).toBeCalledTimes(1);
                    expect(node_fetch_1.default).toBeCalledWith('https://brewery-app.com/api/client/saveInkbirdData', {
                        body: JSON.stringify({
                            machineId: 'testMachineId',
                            data: [
                                {
                                    deviceId: 'deviceId1',
                                    unixtime: 1,
                                    temperature: 30,
                                    humidity: 80,
                                    battery: 90,
                                },
                                {
                                    deviceId: 'deviceId2',
                                    unixtime: 1,
                                    temperature: 30,
                                    humidity: 80,
                                    battery: 90,
                                },
                            ],
                            backfill: true,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                        timeout: 5000,
                    });
                    expect(fs_1.default.writeSync).toBeCalledTimes(2);
                    expect(fs_1.default.writeSync).toBeCalledWith(undefined, ' '.repeat(entry1.length), 0);
                    expect(fs_1.default.writeSync).toBeCalledWith(undefined, ' '.repeat(entry2.length), (entry1 + '\n').length);
                    return [2 /*return*/];
            }
        });
    }); });
});
var FakeDirent = /** @class */ (function (_super) {
    __extends(FakeDirent, _super);
    function FakeDirent(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    FakeDirent.prototype.isFile = function () {
        return true;
    };
    return FakeDirent;
}(fs_1.default.Dirent));
