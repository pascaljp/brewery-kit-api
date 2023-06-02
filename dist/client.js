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
exports.ClientApi = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var luxon_1 = require("luxon");
var Log4js = __importStar(require("log4js"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var api_pb_1 = require("../proto/genfiles/api_pb");
// Around 100kB per file.
var BYTE_LIMIT = 100 * 1024;
var logger = Log4js.getLogger();
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
var ClientApi = /** @class */ (function () {
    function ClientApi(baseDir, machineId) {
        this.baseDir_ = baseDir;
        this.fileName_ = "".concat(luxon_1.DateTime.now().toMillis());
        this.machineId_ = machineId;
        this.currentBytes_ = 0;
        this.timer_ = null;
        this.resending_ = false;
    }
    ClientApi.prototype.saveLocally_ = function (proto) {
        var buffer = api_pb_1.Logs.Logs.encode(proto).finish();
        fs.appendFileSync(path.join(this.baseDir_, this.fileName_), buffer);
        this.currentBytes_ += buffer.byteLength;
        if (this.currentBytes_ >= BYTE_LIMIT) {
            this.fileName_ = "".concat(luxon_1.DateTime.now().toMillis());
            this.currentBytes_ = 0;
        }
    };
    // Iterate all files and runs the callback function. The callback should return if it succeeds.
    // In that case, the processed file is deleted.
    ClientApi.prototype.processAndDeleteFiles = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var files, _i, files_1, file, buffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = fs.readdirSync(this.baseDir_, { withFileTypes: true });
                        _i = 0, files_1 = files;
                        _a.label = 1;
                    case 1:
                        if (!(_i < files_1.length)) return [3 /*break*/, 4];
                        file = files_1[_i];
                        if (!file.isFile()) {
                            return [3 /*break*/, 3];
                        }
                        buffer = fs.readFileSync(path.join(this.baseDir_, file.name));
                        return [4 /*yield*/, callback(api_pb_1.Logs.Logs.decode(buffer))];
                    case 2:
                        if (_a.sent()) {
                            fs.unlinkSync(path.join(this.baseDir_, file.name));
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ClientApi.prototype.saveSensorProto = function (proto) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!proto.logs) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetchContent('https://brewery-app.com/api/client/saveSensorProto', {
                                method: 'POST',
                                timeout: 5 * 1000,
                                headers: { 'Content-Type': 'application/octet-stream' },
                                body: api_pb_1.Logs.SaveSensorDataRequest.encode(proto).finish(),
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        logger.error('Error in saveSensorProto:', e_1.message);
                        this.saveLocally_(proto.logs);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ClientApi.prototype.resend_ = function () {
        var _this = this;
        return this.processAndDeleteFiles(function (logsProto) { return __awaiter(_this, void 0, void 0, function () {
            var proto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        proto = api_pb_1.Logs.SaveSensorDataRequest.create({
                            backfill: true,
                            machineId: this.machineId_,
                        });
                        proto.logs = logsProto;
                        return [4 /*yield*/, this.saveSensorProto(proto)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        }); });
    };
    // Time consuming, but this task does not block anyting.
    ClientApi.prototype.startBackgroundTask = function (callback) {
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
                                        return [4 /*yield*/, this.resend_()];
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
                        return [4 /*yield*/, this.resend_()];
                    case 1:
                        _a.sent();
                        this.resending_ = false;
                        callback();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientApi.prototype.stopBackgroundTask = function () {
        if (this.timer_) {
            clearInterval(this.timer_);
        }
    };
    return ClientApi;
}());
exports.ClientApi = ClientApi;
