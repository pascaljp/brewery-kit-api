/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Logs = (function() {

    /**
     * Namespace Logs.
     * @exports Logs
     * @namespace
     */
    var Logs = {};

    Logs.InkbirdLog = (function() {

        /**
         * Properties of an InkbirdLog.
         * @memberof Logs
         * @interface IInkbirdLog
         * @property {string|null} [deviceId] InkbirdLog deviceId
         * @property {number|null} [unixtime] InkbirdLog unixtime
         * @property {number|null} [temperatureE2] InkbirdLog temperatureE2
         * @property {number|null} [humidityE2] InkbirdLog humidityE2
         * @property {number|null} [batteryPercent] InkbirdLog batteryPercent
         */

        /**
         * Constructs a new InkbirdLog.
         * @memberof Logs
         * @classdesc Represents an InkbirdLog.
         * @implements IInkbirdLog
         * @constructor
         * @param {Logs.IInkbirdLog=} [properties] Properties to set
         */
        function InkbirdLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InkbirdLog deviceId.
         * @member {string} deviceId
         * @memberof Logs.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.deviceId = "";

        /**
         * InkbirdLog unixtime.
         * @member {number} unixtime
         * @memberof Logs.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.unixtime = 0;

        /**
         * InkbirdLog temperatureE2.
         * @member {number} temperatureE2
         * @memberof Logs.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.temperatureE2 = 0;

        /**
         * InkbirdLog humidityE2.
         * @member {number} humidityE2
         * @memberof Logs.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.humidityE2 = 0;

        /**
         * InkbirdLog batteryPercent.
         * @member {number} batteryPercent
         * @memberof Logs.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.batteryPercent = 0;

        /**
         * Creates a new InkbirdLog instance using the specified properties.
         * @function create
         * @memberof Logs.InkbirdLog
         * @static
         * @param {Logs.IInkbirdLog=} [properties] Properties to set
         * @returns {Logs.InkbirdLog} InkbirdLog instance
         */
        InkbirdLog.create = function create(properties) {
            return new InkbirdLog(properties);
        };

        /**
         * Encodes the specified InkbirdLog message. Does not implicitly {@link Logs.InkbirdLog.verify|verify} messages.
         * @function encode
         * @memberof Logs.InkbirdLog
         * @static
         * @param {Logs.IInkbirdLog} message InkbirdLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InkbirdLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unixtime != null && Object.hasOwnProperty.call(message, "unixtime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.unixtime);
            if (message.temperatureE2 != null && Object.hasOwnProperty.call(message, "temperatureE2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.temperatureE2);
            if (message.humidityE2 != null && Object.hasOwnProperty.call(message, "humidityE2"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.humidityE2);
            if (message.batteryPercent != null && Object.hasOwnProperty.call(message, "batteryPercent"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.batteryPercent);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceId);
            return writer;
        };

        /**
         * Encodes the specified InkbirdLog message, length delimited. Does not implicitly {@link Logs.InkbirdLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Logs.InkbirdLog
         * @static
         * @param {Logs.IInkbirdLog} message InkbirdLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InkbirdLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InkbirdLog message from the specified reader or buffer.
         * @function decode
         * @memberof Logs.InkbirdLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Logs.InkbirdLog} InkbirdLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InkbirdLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Logs.InkbirdLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 5: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 1: {
                        message.unixtime = reader.uint32();
                        break;
                    }
                case 2: {
                        message.temperatureE2 = reader.int32();
                        break;
                    }
                case 3: {
                        message.humidityE2 = reader.int32();
                        break;
                    }
                case 4: {
                        message.batteryPercent = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InkbirdLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Logs.InkbirdLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Logs.InkbirdLog} InkbirdLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InkbirdLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InkbirdLog message.
         * @function verify
         * @memberof Logs.InkbirdLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InkbirdLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                if (!$util.isInteger(message.unixtime))
                    return "unixtime: integer expected";
            if (message.temperatureE2 != null && message.hasOwnProperty("temperatureE2"))
                if (!$util.isInteger(message.temperatureE2))
                    return "temperatureE2: integer expected";
            if (message.humidityE2 != null && message.hasOwnProperty("humidityE2"))
                if (!$util.isInteger(message.humidityE2))
                    return "humidityE2: integer expected";
            if (message.batteryPercent != null && message.hasOwnProperty("batteryPercent"))
                if (!$util.isInteger(message.batteryPercent))
                    return "batteryPercent: integer expected";
            return null;
        };

        /**
         * Creates an InkbirdLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Logs.InkbirdLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Logs.InkbirdLog} InkbirdLog
         */
        InkbirdLog.fromObject = function fromObject(object) {
            if (object instanceof $root.Logs.InkbirdLog)
                return object;
            var message = new $root.Logs.InkbirdLog();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.unixtime != null)
                message.unixtime = object.unixtime >>> 0;
            if (object.temperatureE2 != null)
                message.temperatureE2 = object.temperatureE2 | 0;
            if (object.humidityE2 != null)
                message.humidityE2 = object.humidityE2 | 0;
            if (object.batteryPercent != null)
                message.batteryPercent = object.batteryPercent | 0;
            return message;
        };

        /**
         * Creates a plain object from an InkbirdLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Logs.InkbirdLog
         * @static
         * @param {Logs.InkbirdLog} message InkbirdLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InkbirdLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.unixtime = 0;
                object.temperatureE2 = 0;
                object.humidityE2 = 0;
                object.batteryPercent = 0;
                object.deviceId = "";
            }
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                object.unixtime = message.unixtime;
            if (message.temperatureE2 != null && message.hasOwnProperty("temperatureE2"))
                object.temperatureE2 = message.temperatureE2;
            if (message.humidityE2 != null && message.hasOwnProperty("humidityE2"))
                object.humidityE2 = message.humidityE2;
            if (message.batteryPercent != null && message.hasOwnProperty("batteryPercent"))
                object.batteryPercent = message.batteryPercent;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            return object;
        };

        /**
         * Converts this InkbirdLog to JSON.
         * @function toJSON
         * @memberof Logs.InkbirdLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InkbirdLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InkbirdLog
         * @function getTypeUrl
         * @memberof Logs.InkbirdLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InkbirdLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Logs.InkbirdLog";
        };

        return InkbirdLog;
    })();

    Logs.PowerMeterLog = (function() {

        /**
         * Properties of a PowerMeterLog.
         * @memberof Logs
         * @interface IPowerMeterLog
         * @property {string|null} [deviceId] PowerMeterLog deviceId
         * @property {number|null} [unixtime] PowerMeterLog unixtime
         * @property {number|null} [watt] PowerMeterLog watt
         * @property {number|null} [wattE1] PowerMeterLog wattE1
         */

        /**
         * Constructs a new PowerMeterLog.
         * @memberof Logs
         * @classdesc Represents a PowerMeterLog.
         * @implements IPowerMeterLog
         * @constructor
         * @param {Logs.IPowerMeterLog=} [properties] Properties to set
         */
        function PowerMeterLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PowerMeterLog deviceId.
         * @member {string} deviceId
         * @memberof Logs.PowerMeterLog
         * @instance
         */
        PowerMeterLog.prototype.deviceId = "";

        /**
         * PowerMeterLog unixtime.
         * @member {number} unixtime
         * @memberof Logs.PowerMeterLog
         * @instance
         */
        PowerMeterLog.prototype.unixtime = 0;

        /**
         * PowerMeterLog watt.
         * @member {number} watt
         * @memberof Logs.PowerMeterLog
         * @instance
         */
        PowerMeterLog.prototype.watt = 0;

        /**
         * PowerMeterLog wattE1.
         * @member {number} wattE1
         * @memberof Logs.PowerMeterLog
         * @instance
         */
        PowerMeterLog.prototype.wattE1 = 0;

        /**
         * Creates a new PowerMeterLog instance using the specified properties.
         * @function create
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {Logs.IPowerMeterLog=} [properties] Properties to set
         * @returns {Logs.PowerMeterLog} PowerMeterLog instance
         */
        PowerMeterLog.create = function create(properties) {
            return new PowerMeterLog(properties);
        };

        /**
         * Encodes the specified PowerMeterLog message. Does not implicitly {@link Logs.PowerMeterLog.verify|verify} messages.
         * @function encode
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {Logs.IPowerMeterLog} message PowerMeterLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerMeterLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unixtime != null && Object.hasOwnProperty.call(message, "unixtime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.unixtime);
            if (message.watt != null && Object.hasOwnProperty.call(message, "watt"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.watt);
            if (message.wattE1 != null && Object.hasOwnProperty.call(message, "wattE1"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.wattE1);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
            return writer;
        };

        /**
         * Encodes the specified PowerMeterLog message, length delimited. Does not implicitly {@link Logs.PowerMeterLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {Logs.IPowerMeterLog} message PowerMeterLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerMeterLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PowerMeterLog message from the specified reader or buffer.
         * @function decode
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Logs.PowerMeterLog} PowerMeterLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PowerMeterLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Logs.PowerMeterLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 1: {
                        message.unixtime = reader.uint32();
                        break;
                    }
                case 2: {
                        message.watt = reader.uint32();
                        break;
                    }
                case 3: {
                        message.wattE1 = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PowerMeterLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Logs.PowerMeterLog} PowerMeterLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PowerMeterLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PowerMeterLog message.
         * @function verify
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PowerMeterLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                if (!$util.isInteger(message.unixtime))
                    return "unixtime: integer expected";
            if (message.watt != null && message.hasOwnProperty("watt"))
                if (!$util.isInteger(message.watt))
                    return "watt: integer expected";
            if (message.wattE1 != null && message.hasOwnProperty("wattE1"))
                if (!$util.isInteger(message.wattE1))
                    return "wattE1: integer expected";
            return null;
        };

        /**
         * Creates a PowerMeterLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Logs.PowerMeterLog} PowerMeterLog
         */
        PowerMeterLog.fromObject = function fromObject(object) {
            if (object instanceof $root.Logs.PowerMeterLog)
                return object;
            var message = new $root.Logs.PowerMeterLog();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.unixtime != null)
                message.unixtime = object.unixtime >>> 0;
            if (object.watt != null)
                message.watt = object.watt >>> 0;
            if (object.wattE1 != null)
                message.wattE1 = object.wattE1 >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PowerMeterLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {Logs.PowerMeterLog} message PowerMeterLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PowerMeterLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.unixtime = 0;
                object.watt = 0;
                object.wattE1 = 0;
                object.deviceId = "";
            }
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                object.unixtime = message.unixtime;
            if (message.watt != null && message.hasOwnProperty("watt"))
                object.watt = message.watt;
            if (message.wattE1 != null && message.hasOwnProperty("wattE1"))
                object.wattE1 = message.wattE1;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            return object;
        };

        /**
         * Converts this PowerMeterLog to JSON.
         * @function toJSON
         * @memberof Logs.PowerMeterLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PowerMeterLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PowerMeterLog
         * @function getTypeUrl
         * @memberof Logs.PowerMeterLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PowerMeterLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Logs.PowerMeterLog";
        };

        return PowerMeterLog;
    })();

    Logs.NetatmoLog = (function() {

        /**
         * Properties of a NetatmoLog.
         * @memberof Logs
         * @interface INetatmoLog
         * @property {string|null} [deviceId] NetatmoLog deviceId
         * @property {number|null} [unixtime] NetatmoLog unixtime
         * @property {number|null} [temperatureE2] NetatmoLog temperatureE2
         * @property {number|null} [humidity] NetatmoLog humidity
         * @property {number|null} [co2Level] NetatmoLog co2Level
         * @property {number|null} [airPressureE1] NetatmoLog airPressureE1
         * @property {number|null} [noiseLevel] NetatmoLog noiseLevel
         */

        /**
         * Constructs a new NetatmoLog.
         * @memberof Logs
         * @classdesc Represents a NetatmoLog.
         * @implements INetatmoLog
         * @constructor
         * @param {Logs.INetatmoLog=} [properties] Properties to set
         */
        function NetatmoLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NetatmoLog deviceId.
         * @member {string} deviceId
         * @memberof Logs.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.deviceId = "";

        /**
         * NetatmoLog unixtime.
         * @member {number} unixtime
         * @memberof Logs.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.unixtime = 0;

        /**
         * NetatmoLog temperatureE2.
         * @member {number} temperatureE2
         * @memberof Logs.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.temperatureE2 = 0;

        /**
         * NetatmoLog humidity.
         * @member {number} humidity
         * @memberof Logs.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.humidity = 0;

        /**
         * NetatmoLog co2Level.
         * @member {number} co2Level
         * @memberof Logs.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.co2Level = 0;

        /**
         * NetatmoLog airPressureE1.
         * @member {number} airPressureE1
         * @memberof Logs.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.airPressureE1 = 0;

        /**
         * NetatmoLog noiseLevel.
         * @member {number} noiseLevel
         * @memberof Logs.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.noiseLevel = 0;

        /**
         * Creates a new NetatmoLog instance using the specified properties.
         * @function create
         * @memberof Logs.NetatmoLog
         * @static
         * @param {Logs.INetatmoLog=} [properties] Properties to set
         * @returns {Logs.NetatmoLog} NetatmoLog instance
         */
        NetatmoLog.create = function create(properties) {
            return new NetatmoLog(properties);
        };

        /**
         * Encodes the specified NetatmoLog message. Does not implicitly {@link Logs.NetatmoLog.verify|verify} messages.
         * @function encode
         * @memberof Logs.NetatmoLog
         * @static
         * @param {Logs.INetatmoLog} message NetatmoLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetatmoLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.unixtime != null && Object.hasOwnProperty.call(message, "unixtime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.unixtime);
            if (message.temperatureE2 != null && Object.hasOwnProperty.call(message, "temperatureE2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.temperatureE2);
            if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.humidity);
            if (message.co2Level != null && Object.hasOwnProperty.call(message, "co2Level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.co2Level);
            if (message.airPressureE1 != null && Object.hasOwnProperty.call(message, "airPressureE1"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.airPressureE1);
            if (message.noiseLevel != null && Object.hasOwnProperty.call(message, "noiseLevel"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.noiseLevel);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.deviceId);
            return writer;
        };

        /**
         * Encodes the specified NetatmoLog message, length delimited. Does not implicitly {@link Logs.NetatmoLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Logs.NetatmoLog
         * @static
         * @param {Logs.INetatmoLog} message NetatmoLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetatmoLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NetatmoLog message from the specified reader or buffer.
         * @function decode
         * @memberof Logs.NetatmoLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Logs.NetatmoLog} NetatmoLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetatmoLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Logs.NetatmoLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 7: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 1: {
                        message.unixtime = reader.uint32();
                        break;
                    }
                case 2: {
                        message.temperatureE2 = reader.int32();
                        break;
                    }
                case 3: {
                        message.humidity = reader.int32();
                        break;
                    }
                case 4: {
                        message.co2Level = reader.int32();
                        break;
                    }
                case 5: {
                        message.airPressureE1 = reader.int32();
                        break;
                    }
                case 6: {
                        message.noiseLevel = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NetatmoLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Logs.NetatmoLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Logs.NetatmoLog} NetatmoLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetatmoLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NetatmoLog message.
         * @function verify
         * @memberof Logs.NetatmoLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetatmoLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                if (!$util.isInteger(message.unixtime))
                    return "unixtime: integer expected";
            if (message.temperatureE2 != null && message.hasOwnProperty("temperatureE2"))
                if (!$util.isInteger(message.temperatureE2))
                    return "temperatureE2: integer expected";
            if (message.humidity != null && message.hasOwnProperty("humidity"))
                if (!$util.isInteger(message.humidity))
                    return "humidity: integer expected";
            if (message.co2Level != null && message.hasOwnProperty("co2Level"))
                if (!$util.isInteger(message.co2Level))
                    return "co2Level: integer expected";
            if (message.airPressureE1 != null && message.hasOwnProperty("airPressureE1"))
                if (!$util.isInteger(message.airPressureE1))
                    return "airPressureE1: integer expected";
            if (message.noiseLevel != null && message.hasOwnProperty("noiseLevel"))
                if (!$util.isInteger(message.noiseLevel))
                    return "noiseLevel: integer expected";
            return null;
        };

        /**
         * Creates a NetatmoLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Logs.NetatmoLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Logs.NetatmoLog} NetatmoLog
         */
        NetatmoLog.fromObject = function fromObject(object) {
            if (object instanceof $root.Logs.NetatmoLog)
                return object;
            var message = new $root.Logs.NetatmoLog();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.unixtime != null)
                message.unixtime = object.unixtime >>> 0;
            if (object.temperatureE2 != null)
                message.temperatureE2 = object.temperatureE2 | 0;
            if (object.humidity != null)
                message.humidity = object.humidity | 0;
            if (object.co2Level != null)
                message.co2Level = object.co2Level | 0;
            if (object.airPressureE1 != null)
                message.airPressureE1 = object.airPressureE1 | 0;
            if (object.noiseLevel != null)
                message.noiseLevel = object.noiseLevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a NetatmoLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Logs.NetatmoLog
         * @static
         * @param {Logs.NetatmoLog} message NetatmoLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetatmoLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.unixtime = 0;
                object.temperatureE2 = 0;
                object.humidity = 0;
                object.co2Level = 0;
                object.airPressureE1 = 0;
                object.noiseLevel = 0;
                object.deviceId = "";
            }
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                object.unixtime = message.unixtime;
            if (message.temperatureE2 != null && message.hasOwnProperty("temperatureE2"))
                object.temperatureE2 = message.temperatureE2;
            if (message.humidity != null && message.hasOwnProperty("humidity"))
                object.humidity = message.humidity;
            if (message.co2Level != null && message.hasOwnProperty("co2Level"))
                object.co2Level = message.co2Level;
            if (message.airPressureE1 != null && message.hasOwnProperty("airPressureE1"))
                object.airPressureE1 = message.airPressureE1;
            if (message.noiseLevel != null && message.hasOwnProperty("noiseLevel"))
                object.noiseLevel = message.noiseLevel;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            return object;
        };

        /**
         * Converts this NetatmoLog to JSON.
         * @function toJSON
         * @memberof Logs.NetatmoLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetatmoLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NetatmoLog
         * @function getTypeUrl
         * @memberof Logs.NetatmoLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetatmoLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Logs.NetatmoLog";
        };

        return NetatmoLog;
    })();

    Logs.Logs = (function() {

        /**
         * Properties of a Logs.
         * @memberof Logs
         * @interface ILogs
         * @property {Array.<Logs.IInkbirdLog>|null} [inkbird] Logs inkbird
         * @property {Array.<Logs.IPowerMeterLog>|null} [powerMeter] Logs powerMeter
         * @property {Array.<Logs.INetatmoLog>|null} [netatmo] Logs netatmo
         */

        /**
         * Constructs a new Logs.
         * @memberof Logs
         * @classdesc Represents a Logs.
         * @implements ILogs
         * @constructor
         * @param {Logs.ILogs=} [properties] Properties to set
         */
        function Logs(properties) {
            this.inkbird = [];
            this.powerMeter = [];
            this.netatmo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Logs inkbird.
         * @member {Array.<Logs.IInkbirdLog>} inkbird
         * @memberof Logs.Logs
         * @instance
         */
        Logs.prototype.inkbird = $util.emptyArray;

        /**
         * Logs powerMeter.
         * @member {Array.<Logs.IPowerMeterLog>} powerMeter
         * @memberof Logs.Logs
         * @instance
         */
        Logs.prototype.powerMeter = $util.emptyArray;

        /**
         * Logs netatmo.
         * @member {Array.<Logs.INetatmoLog>} netatmo
         * @memberof Logs.Logs
         * @instance
         */
        Logs.prototype.netatmo = $util.emptyArray;

        /**
         * Creates a new Logs instance using the specified properties.
         * @function create
         * @memberof Logs.Logs
         * @static
         * @param {Logs.ILogs=} [properties] Properties to set
         * @returns {Logs.Logs} Logs instance
         */
        Logs.create = function create(properties) {
            return new Logs(properties);
        };

        /**
         * Encodes the specified Logs message. Does not implicitly {@link Logs.Logs.verify|verify} messages.
         * @function encode
         * @memberof Logs.Logs
         * @static
         * @param {Logs.ILogs} message Logs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Logs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.inkbird != null && message.inkbird.length)
                for (var i = 0; i < message.inkbird.length; ++i)
                    $root.Logs.InkbirdLog.encode(message.inkbird[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.powerMeter != null && message.powerMeter.length)
                for (var i = 0; i < message.powerMeter.length; ++i)
                    $root.Logs.PowerMeterLog.encode(message.powerMeter[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.netatmo != null && message.netatmo.length)
                for (var i = 0; i < message.netatmo.length; ++i)
                    $root.Logs.NetatmoLog.encode(message.netatmo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Logs message, length delimited. Does not implicitly {@link Logs.Logs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Logs.Logs
         * @static
         * @param {Logs.ILogs} message Logs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Logs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Logs message from the specified reader or buffer.
         * @function decode
         * @memberof Logs.Logs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Logs.Logs} Logs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Logs.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Logs.Logs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.inkbird && message.inkbird.length))
                            message.inkbird = [];
                        message.inkbird.push($root.Logs.InkbirdLog.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.powerMeter && message.powerMeter.length))
                            message.powerMeter = [];
                        message.powerMeter.push($root.Logs.PowerMeterLog.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.netatmo && message.netatmo.length))
                            message.netatmo = [];
                        message.netatmo.push($root.Logs.NetatmoLog.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Logs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Logs.Logs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Logs.Logs} Logs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Logs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Logs message.
         * @function verify
         * @memberof Logs.Logs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Logs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.inkbird != null && message.hasOwnProperty("inkbird")) {
                if (!Array.isArray(message.inkbird))
                    return "inkbird: array expected";
                for (var i = 0; i < message.inkbird.length; ++i) {
                    var error = $root.Logs.InkbirdLog.verify(message.inkbird[i]);
                    if (error)
                        return "inkbird." + error;
                }
            }
            if (message.powerMeter != null && message.hasOwnProperty("powerMeter")) {
                if (!Array.isArray(message.powerMeter))
                    return "powerMeter: array expected";
                for (var i = 0; i < message.powerMeter.length; ++i) {
                    var error = $root.Logs.PowerMeterLog.verify(message.powerMeter[i]);
                    if (error)
                        return "powerMeter." + error;
                }
            }
            if (message.netatmo != null && message.hasOwnProperty("netatmo")) {
                if (!Array.isArray(message.netatmo))
                    return "netatmo: array expected";
                for (var i = 0; i < message.netatmo.length; ++i) {
                    var error = $root.Logs.NetatmoLog.verify(message.netatmo[i]);
                    if (error)
                        return "netatmo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Logs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Logs.Logs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Logs.Logs} Logs
         */
        Logs.fromObject = function fromObject(object) {
            if (object instanceof $root.Logs.Logs)
                return object;
            var message = new $root.Logs.Logs();
            if (object.inkbird) {
                if (!Array.isArray(object.inkbird))
                    throw TypeError(".Logs.Logs.inkbird: array expected");
                message.inkbird = [];
                for (var i = 0; i < object.inkbird.length; ++i) {
                    if (typeof object.inkbird[i] !== "object")
                        throw TypeError(".Logs.Logs.inkbird: object expected");
                    message.inkbird[i] = $root.Logs.InkbirdLog.fromObject(object.inkbird[i]);
                }
            }
            if (object.powerMeter) {
                if (!Array.isArray(object.powerMeter))
                    throw TypeError(".Logs.Logs.powerMeter: array expected");
                message.powerMeter = [];
                for (var i = 0; i < object.powerMeter.length; ++i) {
                    if (typeof object.powerMeter[i] !== "object")
                        throw TypeError(".Logs.Logs.powerMeter: object expected");
                    message.powerMeter[i] = $root.Logs.PowerMeterLog.fromObject(object.powerMeter[i]);
                }
            }
            if (object.netatmo) {
                if (!Array.isArray(object.netatmo))
                    throw TypeError(".Logs.Logs.netatmo: array expected");
                message.netatmo = [];
                for (var i = 0; i < object.netatmo.length; ++i) {
                    if (typeof object.netatmo[i] !== "object")
                        throw TypeError(".Logs.Logs.netatmo: object expected");
                    message.netatmo[i] = $root.Logs.NetatmoLog.fromObject(object.netatmo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Logs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Logs.Logs
         * @static
         * @param {Logs.Logs} message Logs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Logs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.inkbird = [];
                object.powerMeter = [];
                object.netatmo = [];
            }
            if (message.inkbird && message.inkbird.length) {
                object.inkbird = [];
                for (var j = 0; j < message.inkbird.length; ++j)
                    object.inkbird[j] = $root.Logs.InkbirdLog.toObject(message.inkbird[j], options);
            }
            if (message.powerMeter && message.powerMeter.length) {
                object.powerMeter = [];
                for (var j = 0; j < message.powerMeter.length; ++j)
                    object.powerMeter[j] = $root.Logs.PowerMeterLog.toObject(message.powerMeter[j], options);
            }
            if (message.netatmo && message.netatmo.length) {
                object.netatmo = [];
                for (var j = 0; j < message.netatmo.length; ++j)
                    object.netatmo[j] = $root.Logs.NetatmoLog.toObject(message.netatmo[j], options);
            }
            return object;
        };

        /**
         * Converts this Logs to JSON.
         * @function toJSON
         * @memberof Logs.Logs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Logs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Logs
         * @function getTypeUrl
         * @memberof Logs.Logs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Logs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Logs.Logs";
        };

        return Logs;
    })();

    return Logs;
})();

module.exports = $root;
