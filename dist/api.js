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
exports.BreweryKitApi = void 0;
var fs = __importStar(require("fs"));
var Path = __importStar(require("path"));
var Log4js = __importStar(require("log4js"));
var async_lock_1 = __importDefault(require("async-lock"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var luxon_1 = require("luxon");
var api_pb_1 = require("../proto/genfiles/api_pb");
var logger = Log4js.getLogger();
// [inkbird, powerMeter, netatmo]
var LogFields = Object.keys(api_pb_1.Logs.Logs.toObject(api_pb_1.Logs.Logs.create({}), { defaults: true }));
var LocalCacheEntry = /** @class */ (function () {
    function LocalCacheEntry(filePath_, fileContent_, start, end) {
        this.filePath_ = filePath_;
        this.fileContent_ = fileContent_;
        this.start_ = start;
        this.end_ = end;
    }
    LocalCacheEntry.prototype.get = function () {
        var data = this.fileContent_.substring(this.start_, this.end_);
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return null;
        }
    };
    LocalCacheEntry.prototype.delete = function () {
        var fd = fs.openSync(this.filePath_, 'r+');
        fs.writeSync(fd, ' '.repeat(this.end_ - this.start_), this.start_);
        fs.closeSync(fd);
    };
    return LocalCacheEntry;
}());
var LocalCacheWriter = /** @class */ (function () {
    function LocalCacheWriter(baseDir, fileName) {
        this.baseDir_ = baseDir;
        this.fileName_ = fileName;
        this.lock_ = new async_lock_1.default({ timeout: 3000 });
    }
    LocalCacheWriter.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.lock_.acquire('disk_lock', function () {
                                try {
                                    fs.appendFileSync(Path.join(_this.baseDir_, _this.fileName_), JSON.stringify(data) + '\n');
                                    logger.warn('Logged to local file.');
                                }
                                catch (err) {
                                    logger.error('Failed to append to file:', JSON.stringify(data), err);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        logger.error('Failed to acquire lock:', err_1, JSON.stringify(data));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LocalCacheWriter.prototype.saveProto = function (proto) {
        return __awaiter(this, void 0, void 0, function () {
            var logs, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!proto.logs) {
                            return [2 /*return*/];
                        }
                        logs = proto.logs;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.lock_.acquire('disk_lock', function () {
                                for (var _i = 0, LogFields_1 = LogFields; _i < LogFields_1.length; _i++) {
                                    var fieldName = LogFields_1[_i];
                                    if (!logs[fieldName]) {
                                        continue;
                                    }
                                    var protoToSave = new api_pb_1.Logs.Logs();
                                    protoToSave[fieldName] = logs[fieldName];
                                    var buffer = api_pb_1.Logs.Logs.encode(protoToSave).finish();
                                    try {
                                        fs.appendFileSync(Path.join(_this.baseDir_, fieldName, _this.fileName_), buffer);
                                        logger.warn('Logged to local file.');
                                    }
                                    catch (err) {
                                        logger.error('Failed to append to file:', JSON.stringify(api_pb_1.Logs.SaveSensorDataRequest.toObject(proto)), err);
                                    }
                                }
                                ;
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        logger.error('Failed to acquire lock:', err_2, JSON.stringify(api_pb_1.Logs.SaveSensorDataRequest.toObject(proto)));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return LocalCacheWriter;
}());
var LocalCacheReader = /** @class */ (function () {
    function LocalCacheReader(filePath) {
        this.filePath_ = filePath;
        this.fileContent_ = '';
    }
    LocalCacheReader.prototype.load = function () {
        this.fileContent_ = fs.readFileSync(this.filePath_, { encoding: 'utf8' });
        var entries = [];
        var position = 0;
        do {
            var newlineCharPosition = this.fileContent_.indexOf('\n', position);
            if (newlineCharPosition === -1) {
                entries.push(new LocalCacheEntry(this.filePath_, this.fileContent_, position, this.fileContent_.length));
                break;
            }
            else {
                entries.push(new LocalCacheEntry(this.filePath_, this.fileContent_, position, newlineCharPosition));
            }
            position = newlineCharPosition + 1;
        } while (position < this.fileContent_.length);
        return entries;
    };
    return LocalCacheReader;
}());
function fetchContent(url, init) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, node_fetch_1.default)(url, init)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Response is not OK');
                    }
                    return [4 /*yield*/, response.text()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// A class that sends data to brewery-kit server.
var BreweryKitApi = /** @class */ (function () {
    function BreweryKitApi(dataDir, machineId) {
        this.dataDir_ = dataDir;
        this.machineId_ = machineId;
        this.resending_ = false;
        this.localCacheWriter_ = new LocalCacheWriter(this.dataDir_, '' + luxon_1.DateTime.now().toSeconds());
        this.timer_ = null;
        fs.mkdirSync(this.dataDir_, { recursive: true });
    }
    // Time consuming, but this task does not block anyting.
    BreweryKitApi.prototype.startBackgroundTask = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timer_ = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!this.resending_) return [3 /*break*/, 2];
                                        this.resending_ = true;
                                        return [4 /*yield*/, this.resendWholeData_()];
                                    case 1:
                                        _a.sent();
                                        this.resending_ = false;
                                        callback();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); }, 10 * 60 * 1000);
                        this.resending_ = true;
                        return [4 /*yield*/, this.resendWholeData_()];
                    case 1:
                        _a.sent();
                        this.resending_ = false;
                        callback();
                        return [2 /*return*/];
                }
            });
        });
    };
    BreweryKitApi.prototype.stopBackgroundTask = function () {
        if (this.timer_) {
            clearInterval(this.timer_);
        }
    };
    // The returned Promise always resolves.
    BreweryKitApi.prototype.saveInkbirdData = function (data, isBackfill) {
        return __awaiter(this, void 0, void 0, function () {
            var params, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            machineId: this.machineId_,
                            data: data,
                            backfill: isBackfill,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchContent('https://brewery-app.com/api/client/saveInkbirdData', {
                                method: 'POST',
                                timeout: 5 * 1000,
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(params),
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        logger.error('Error in saveInkbirdData:', e_1.message);
                        return [2 /*return*/, this.saveToDisk_(data)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BreweryKitApi.prototype.saveSensorData = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetchContent('https://brewery-app.com/api/client/saveSensorData', {
                                method: 'POST',
                                timeout: 5 * 1000,
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(params),
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        logger.error('Error in saveSensorData:', e_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // The returned Promise always resolves.
    BreweryKitApi.prototype.saveToDisk_ = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, data_1, entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, data_1 = data;
                        _a.label = 1;
                    case 1:
                        if (!(_i < data_1.length)) return [3 /*break*/, 4];
                        entry = data_1[_i];
                        return [4 /*yield*/, this.localCacheWriter_.save(entry)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BreweryKitApi.prototype.resendWholeData_ = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, _loop_1, this_1, _i, files_1, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = fs.readdirSync(this.dataDir_, {
                            withFileTypes: true,
                        });
                        // New data will be stored to a new file.
                        this.localCacheWriter_ = new LocalCacheWriter(this.dataDir_, '' + luxon_1.DateTime.now().toSeconds());
                        _loop_1 = function (file) {
                            var filePath, localCache, entries, bucketLength, buckets, _b, buckets_1, bucket, buffer, _c, bucket_1, entry, data, _d, bucket_2, entry;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        if (!file.isFile()) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        filePath = Path.join(this_1.dataDir_, file.name);
                                        localCache = new LocalCacheReader(filePath);
                                        entries = localCache.load();
                                        bucketLength = Math.ceil(entries.length / 100);
                                        buckets = new Array(bucketLength)
                                            .fill([])
                                            .map(function (_, i) { return entries.slice(i * 100, (i + 1) * 100); });
                                        _b = 0, buckets_1 = buckets;
                                        _e.label = 1;
                                    case 1:
                                        if (!(_b < buckets_1.length)) return [3 /*break*/, 4];
                                        bucket = buckets_1[_b];
                                        buffer = [];
                                        for (_c = 0, bucket_1 = bucket; _c < bucket_1.length; _c++) {
                                            entry = bucket_1[_c];
                                            data = entry.get();
                                            if (data) {
                                                buffer.push(data);
                                            }
                                        }
                                        return [4 /*yield*/, this_1.saveInkbirdData(buffer, /* isBackfill= */ true)];
                                    case 2:
                                        _e.sent();
                                        for (_d = 0, bucket_2 = bucket; _d < bucket_2.length; _d++) {
                                            entry = bucket_2[_d];
                                            entry.delete();
                                        }
                                        _e.label = 3;
                                    case 3:
                                        _b++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        fs.unlinkSync(filePath);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, files_1 = files;
                        _a.label = 1;
                    case 1:
                        if (!(_i < files_1.length)) return [3 /*break*/, 4];
                        file = files_1[_i];
                        return [5 /*yield**/, _loop_1(file)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BreweryKitApi;
}());
exports.BreweryKitApi = BreweryKitApi;
