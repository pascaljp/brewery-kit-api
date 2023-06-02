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
exports.ServerApi = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var luxon_1 = require("luxon");
var api_pb_1 = require("../proto/genfiles/api_pb");
// [inkbird, powerMeter, netatmo]
var FieldNames = Object.keys(api_pb_1.Logs.Logs.toObject(api_pb_1.Logs.Logs.create({}), { defaults: true }));
var ServerApi = /** @class */ (function () {
    function ServerApi(baseDir) {
        this.baseDir_ = baseDir;
    }
    ServerApi.prototype.save = function (proto) {
        var protoToSave = api_pb_1.Logs.Logs.decode(api_pb_1.Logs.Logs.encode(proto).finish());
        var protos = {};
        for (var _i = 0, FieldNames_1 = FieldNames; _i < FieldNames_1.length; _i++) {
            var fieldName = FieldNames_1[_i];
            for (var _a = 0, _b = protoToSave[fieldName] || []; _a < _b.length; _a++) {
                var entry = _b[_a];
                var entryTime = luxon_1.DateTime.fromSeconds(entry.unixtime, { zone: 'Asia/Tokyo' });
                var entryDate = entryTime.toFormat('yyyy-LL-dd');
                if (!entry.deviceId) {
                    continue;
                }
                var deviceId = entry.deviceId;
                delete entry.deviceId;
                if (!(fieldName in protos)) {
                    protos[fieldName] = {};
                }
                if (!(deviceId in protos[fieldName])) {
                    protos[fieldName][deviceId] = {};
                }
                if (!(entryDate in protos[fieldName][deviceId])) {
                    protos[fieldName][deviceId][entryDate] = api_pb_1.Logs.Logs.create();
                }
                protos[fieldName][deviceId][entryDate][fieldName].push(entry);
            }
        }
        for (var _c = 0, _d = Object.keys(protos); _c < _d.length; _c++) {
            var fieldName = _d[_c];
            for (var _e = 0, _f = Object.keys(protos[fieldName]); _e < _f.length; _e++) {
                var deviceId = _f[_e];
                for (var _g = 0, _h = Object.keys(protos[fieldName][deviceId]); _g < _h.length; _g++) {
                    var entryDate = _h[_g];
                    var filePath = path.join(this.baseDir_, fieldName, deviceId, entryDate);
                    var buffer = api_pb_1.Logs.Logs.encode(protos[fieldName][deviceId][entryDate]).finish();
                    fs.mkdirSync(path.dirname(filePath), { recursive: true });
                    fs.appendFileSync(filePath, buffer);
                }
            }
        }
    };
    ServerApi.prototype.load = function (type, date) {
        var entryDate = date.toFormat('yyyy-MM-dd');
        var filePath = path.join(this.baseDir_, type, entryDate);
        var buffer = fs.readFileSync(filePath);
        return api_pb_1.Logs.Logs.decode(buffer);
    };
    return ServerApi;
}());
exports.ServerApi = ServerApi;
