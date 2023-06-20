/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Api2 = (function() {

    /**
     * Namespace Api2.
     * @exports Api2
     * @namespace
     */
    var Api2 = {};

    Api2.InkbirdLog = (function() {

        /**
         * Properties of an InkbirdLog.
         * @memberof Api2
         * @interface IInkbirdLog
         * @property {number|null} [temperatureE2] InkbirdLog temperatureE2
         * @property {number|null} [humidityE2] InkbirdLog humidityE2
         * @property {number|null} [batteryPercent] InkbirdLog batteryPercent
         */

        /**
         * Constructs a new InkbirdLog.
         * @memberof Api2
         * @classdesc Represents an InkbirdLog.
         * @implements IInkbirdLog
         * @constructor
         * @param {Api2.IInkbirdLog=} [properties] Properties to set
         */
        function InkbirdLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InkbirdLog temperatureE2.
         * @member {number} temperatureE2
         * @memberof Api2.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.temperatureE2 = 0;

        /**
         * InkbirdLog humidityE2.
         * @member {number} humidityE2
         * @memberof Api2.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.humidityE2 = 0;

        /**
         * InkbirdLog batteryPercent.
         * @member {number} batteryPercent
         * @memberof Api2.InkbirdLog
         * @instance
         */
        InkbirdLog.prototype.batteryPercent = 0;

        /**
         * Creates a new InkbirdLog instance using the specified properties.
         * @function create
         * @memberof Api2.InkbirdLog
         * @static
         * @param {Api2.IInkbirdLog=} [properties] Properties to set
         * @returns {Api2.InkbirdLog} InkbirdLog instance
         */
        InkbirdLog.create = function create(properties) {
            return new InkbirdLog(properties);
        };

        /**
         * Encodes the specified InkbirdLog message. Does not implicitly {@link Api2.InkbirdLog.verify|verify} messages.
         * @function encode
         * @memberof Api2.InkbirdLog
         * @static
         * @param {Api2.IInkbirdLog} message InkbirdLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InkbirdLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.temperatureE2 != null && Object.hasOwnProperty.call(message, "temperatureE2"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.temperatureE2);
            if (message.humidityE2 != null && Object.hasOwnProperty.call(message, "humidityE2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.humidityE2);
            if (message.batteryPercent != null && Object.hasOwnProperty.call(message, "batteryPercent"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.batteryPercent);
            return writer;
        };

        /**
         * Encodes the specified InkbirdLog message, length delimited. Does not implicitly {@link Api2.InkbirdLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Api2.InkbirdLog
         * @static
         * @param {Api2.IInkbirdLog} message InkbirdLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InkbirdLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InkbirdLog message from the specified reader or buffer.
         * @function decode
         * @memberof Api2.InkbirdLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Api2.InkbirdLog} InkbirdLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InkbirdLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Api2.InkbirdLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.temperatureE2 = reader.int32();
                        break;
                    }
                case 2: {
                        message.humidityE2 = reader.int32();
                        break;
                    }
                case 3: {
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
         * @memberof Api2.InkbirdLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Api2.InkbirdLog} InkbirdLog
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
         * @memberof Api2.InkbirdLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InkbirdLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * @memberof Api2.InkbirdLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Api2.InkbirdLog} InkbirdLog
         */
        InkbirdLog.fromObject = function fromObject(object) {
            if (object instanceof $root.Api2.InkbirdLog)
                return object;
            var message = new $root.Api2.InkbirdLog();
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
         * @memberof Api2.InkbirdLog
         * @static
         * @param {Api2.InkbirdLog} message InkbirdLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InkbirdLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.temperatureE2 = 0;
                object.humidityE2 = 0;
                object.batteryPercent = 0;
            }
            if (message.temperatureE2 != null && message.hasOwnProperty("temperatureE2"))
                object.temperatureE2 = message.temperatureE2;
            if (message.humidityE2 != null && message.hasOwnProperty("humidityE2"))
                object.humidityE2 = message.humidityE2;
            if (message.batteryPercent != null && message.hasOwnProperty("batteryPercent"))
                object.batteryPercent = message.batteryPercent;
            return object;
        };

        /**
         * Converts this InkbirdLog to JSON.
         * @function toJSON
         * @memberof Api2.InkbirdLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InkbirdLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InkbirdLog
         * @function getTypeUrl
         * @memberof Api2.InkbirdLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InkbirdLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Api2.InkbirdLog";
        };

        return InkbirdLog;
    })();

    Api2.PowerMeterLog = (function() {

        /**
         * Properties of a PowerMeterLog.
         * @memberof Api2
         * @interface IPowerMeterLog
         * @property {number|null} [wattE1] PowerMeterLog wattE1
         */

        /**
         * Constructs a new PowerMeterLog.
         * @memberof Api2
         * @classdesc Represents a PowerMeterLog.
         * @implements IPowerMeterLog
         * @constructor
         * @param {Api2.IPowerMeterLog=} [properties] Properties to set
         */
        function PowerMeterLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PowerMeterLog wattE1.
         * @member {number} wattE1
         * @memberof Api2.PowerMeterLog
         * @instance
         */
        PowerMeterLog.prototype.wattE1 = 0;

        /**
         * Creates a new PowerMeterLog instance using the specified properties.
         * @function create
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {Api2.IPowerMeterLog=} [properties] Properties to set
         * @returns {Api2.PowerMeterLog} PowerMeterLog instance
         */
        PowerMeterLog.create = function create(properties) {
            return new PowerMeterLog(properties);
        };

        /**
         * Encodes the specified PowerMeterLog message. Does not implicitly {@link Api2.PowerMeterLog.verify|verify} messages.
         * @function encode
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {Api2.IPowerMeterLog} message PowerMeterLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerMeterLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wattE1 != null && Object.hasOwnProperty.call(message, "wattE1"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.wattE1);
            return writer;
        };

        /**
         * Encodes the specified PowerMeterLog message, length delimited. Does not implicitly {@link Api2.PowerMeterLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {Api2.IPowerMeterLog} message PowerMeterLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerMeterLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PowerMeterLog message from the specified reader or buffer.
         * @function decode
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Api2.PowerMeterLog} PowerMeterLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PowerMeterLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Api2.PowerMeterLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
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
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Api2.PowerMeterLog} PowerMeterLog
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
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PowerMeterLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wattE1 != null && message.hasOwnProperty("wattE1"))
                if (!$util.isInteger(message.wattE1))
                    return "wattE1: integer expected";
            return null;
        };

        /**
         * Creates a PowerMeterLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Api2.PowerMeterLog} PowerMeterLog
         */
        PowerMeterLog.fromObject = function fromObject(object) {
            if (object instanceof $root.Api2.PowerMeterLog)
                return object;
            var message = new $root.Api2.PowerMeterLog();
            if (object.wattE1 != null)
                message.wattE1 = object.wattE1 >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PowerMeterLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {Api2.PowerMeterLog} message PowerMeterLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PowerMeterLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.wattE1 = 0;
            if (message.wattE1 != null && message.hasOwnProperty("wattE1"))
                object.wattE1 = message.wattE1;
            return object;
        };

        /**
         * Converts this PowerMeterLog to JSON.
         * @function toJSON
         * @memberof Api2.PowerMeterLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PowerMeterLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PowerMeterLog
         * @function getTypeUrl
         * @memberof Api2.PowerMeterLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PowerMeterLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Api2.PowerMeterLog";
        };

        return PowerMeterLog;
    })();

    Api2.NetatmoLog = (function() {

        /**
         * Properties of a NetatmoLog.
         * @memberof Api2
         * @interface INetatmoLog
         * @property {number|null} [temperatureE2] NetatmoLog temperatureE2
         * @property {number|null} [humidity] NetatmoLog humidity
         * @property {number|null} [co2Level] NetatmoLog co2Level
         * @property {number|null} [airPressureE1] NetatmoLog airPressureE1
         * @property {number|null} [noiseLevel] NetatmoLog noiseLevel
         */

        /**
         * Constructs a new NetatmoLog.
         * @memberof Api2
         * @classdesc Represents a NetatmoLog.
         * @implements INetatmoLog
         * @constructor
         * @param {Api2.INetatmoLog=} [properties] Properties to set
         */
        function NetatmoLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NetatmoLog temperatureE2.
         * @member {number} temperatureE2
         * @memberof Api2.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.temperatureE2 = 0;

        /**
         * NetatmoLog humidity.
         * @member {number} humidity
         * @memberof Api2.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.humidity = 0;

        /**
         * NetatmoLog co2Level.
         * @member {number} co2Level
         * @memberof Api2.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.co2Level = 0;

        /**
         * NetatmoLog airPressureE1.
         * @member {number} airPressureE1
         * @memberof Api2.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.airPressureE1 = 0;

        /**
         * NetatmoLog noiseLevel.
         * @member {number} noiseLevel
         * @memberof Api2.NetatmoLog
         * @instance
         */
        NetatmoLog.prototype.noiseLevel = 0;

        /**
         * Creates a new NetatmoLog instance using the specified properties.
         * @function create
         * @memberof Api2.NetatmoLog
         * @static
         * @param {Api2.INetatmoLog=} [properties] Properties to set
         * @returns {Api2.NetatmoLog} NetatmoLog instance
         */
        NetatmoLog.create = function create(properties) {
            return new NetatmoLog(properties);
        };

        /**
         * Encodes the specified NetatmoLog message. Does not implicitly {@link Api2.NetatmoLog.verify|verify} messages.
         * @function encode
         * @memberof Api2.NetatmoLog
         * @static
         * @param {Api2.INetatmoLog} message NetatmoLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetatmoLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.temperatureE2 != null && Object.hasOwnProperty.call(message, "temperatureE2"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.temperatureE2);
            if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.humidity);
            if (message.co2Level != null && Object.hasOwnProperty.call(message, "co2Level"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.co2Level);
            if (message.airPressureE1 != null && Object.hasOwnProperty.call(message, "airPressureE1"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.airPressureE1);
            if (message.noiseLevel != null && Object.hasOwnProperty.call(message, "noiseLevel"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.noiseLevel);
            return writer;
        };

        /**
         * Encodes the specified NetatmoLog message, length delimited. Does not implicitly {@link Api2.NetatmoLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Api2.NetatmoLog
         * @static
         * @param {Api2.INetatmoLog} message NetatmoLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetatmoLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NetatmoLog message from the specified reader or buffer.
         * @function decode
         * @memberof Api2.NetatmoLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Api2.NetatmoLog} NetatmoLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetatmoLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Api2.NetatmoLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.temperatureE2 = reader.int32();
                        break;
                    }
                case 2: {
                        message.humidity = reader.int32();
                        break;
                    }
                case 3: {
                        message.co2Level = reader.int32();
                        break;
                    }
                case 4: {
                        message.airPressureE1 = reader.int32();
                        break;
                    }
                case 5: {
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
         * @memberof Api2.NetatmoLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Api2.NetatmoLog} NetatmoLog
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
         * @memberof Api2.NetatmoLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetatmoLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * @memberof Api2.NetatmoLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Api2.NetatmoLog} NetatmoLog
         */
        NetatmoLog.fromObject = function fromObject(object) {
            if (object instanceof $root.Api2.NetatmoLog)
                return object;
            var message = new $root.Api2.NetatmoLog();
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
         * @memberof Api2.NetatmoLog
         * @static
         * @param {Api2.NetatmoLog} message NetatmoLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetatmoLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.temperatureE2 = 0;
                object.humidity = 0;
                object.co2Level = 0;
                object.airPressureE1 = 0;
                object.noiseLevel = 0;
            }
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
            return object;
        };

        /**
         * Converts this NetatmoLog to JSON.
         * @function toJSON
         * @memberof Api2.NetatmoLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetatmoLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NetatmoLog
         * @function getTypeUrl
         * @memberof Api2.NetatmoLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetatmoLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Api2.NetatmoLog";
        };

        return NetatmoLog;
    })();

    Api2.Log = (function() {

        /**
         * Properties of a Log.
         * @memberof Api2
         * @interface ILog
         * @property {string|null} [deviceId] Log deviceId
         * @property {number|null} [unixtime] Log unixtime
         * @property {Api2.IInkbirdLog|null} [inkbird] Log inkbird
         * @property {Api2.IPowerMeterLog|null} [powerMeter] Log powerMeter
         * @property {Api2.INetatmoLog|null} [netatmo] Log netatmo
         */

        /**
         * Constructs a new Log.
         * @memberof Api2
         * @classdesc Represents a Log.
         * @implements ILog
         * @constructor
         * @param {Api2.ILog=} [properties] Properties to set
         */
        function Log(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Log deviceId.
         * @member {string} deviceId
         * @memberof Api2.Log
         * @instance
         */
        Log.prototype.deviceId = "";

        /**
         * Log unixtime.
         * @member {number} unixtime
         * @memberof Api2.Log
         * @instance
         */
        Log.prototype.unixtime = 0;

        /**
         * Log inkbird.
         * @member {Api2.IInkbirdLog|null|undefined} inkbird
         * @memberof Api2.Log
         * @instance
         */
        Log.prototype.inkbird = null;

        /**
         * Log powerMeter.
         * @member {Api2.IPowerMeterLog|null|undefined} powerMeter
         * @memberof Api2.Log
         * @instance
         */
        Log.prototype.powerMeter = null;

        /**
         * Log netatmo.
         * @member {Api2.INetatmoLog|null|undefined} netatmo
         * @memberof Api2.Log
         * @instance
         */
        Log.prototype.netatmo = null;

        /**
         * Creates a new Log instance using the specified properties.
         * @function create
         * @memberof Api2.Log
         * @static
         * @param {Api2.ILog=} [properties] Properties to set
         * @returns {Api2.Log} Log instance
         */
        Log.create = function create(properties) {
            return new Log(properties);
        };

        /**
         * Encodes the specified Log message. Does not implicitly {@link Api2.Log.verify|verify} messages.
         * @function encode
         * @memberof Api2.Log
         * @static
         * @param {Api2.ILog} message Log message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Log.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
            if (message.unixtime != null && Object.hasOwnProperty.call(message, "unixtime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.unixtime);
            if (message.inkbird != null && Object.hasOwnProperty.call(message, "inkbird"))
                $root.Api2.InkbirdLog.encode(message.inkbird, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.powerMeter != null && Object.hasOwnProperty.call(message, "powerMeter"))
                $root.Api2.PowerMeterLog.encode(message.powerMeter, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.netatmo != null && Object.hasOwnProperty.call(message, "netatmo"))
                $root.Api2.NetatmoLog.encode(message.netatmo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Log message, length delimited. Does not implicitly {@link Api2.Log.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Api2.Log
         * @static
         * @param {Api2.ILog} message Log message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Log.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Log message from the specified reader or buffer.
         * @function decode
         * @memberof Api2.Log
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Api2.Log} Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Log.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Api2.Log();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 2: {
                        message.unixtime = reader.uint32();
                        break;
                    }
                case 3: {
                        message.inkbird = $root.Api2.InkbirdLog.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.powerMeter = $root.Api2.PowerMeterLog.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.netatmo = $root.Api2.NetatmoLog.decode(reader, reader.uint32());
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
         * Decodes a Log message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Api2.Log
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Api2.Log} Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Log.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Log message.
         * @function verify
         * @memberof Api2.Log
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Log.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                if (!$util.isInteger(message.unixtime))
                    return "unixtime: integer expected";
            if (message.inkbird != null && message.hasOwnProperty("inkbird")) {
                var error = $root.Api2.InkbirdLog.verify(message.inkbird);
                if (error)
                    return "inkbird." + error;
            }
            if (message.powerMeter != null && message.hasOwnProperty("powerMeter")) {
                var error = $root.Api2.PowerMeterLog.verify(message.powerMeter);
                if (error)
                    return "powerMeter." + error;
            }
            if (message.netatmo != null && message.hasOwnProperty("netatmo")) {
                var error = $root.Api2.NetatmoLog.verify(message.netatmo);
                if (error)
                    return "netatmo." + error;
            }
            return null;
        };

        /**
         * Creates a Log message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Api2.Log
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Api2.Log} Log
         */
        Log.fromObject = function fromObject(object) {
            if (object instanceof $root.Api2.Log)
                return object;
            var message = new $root.Api2.Log();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.unixtime != null)
                message.unixtime = object.unixtime >>> 0;
            if (object.inkbird != null) {
                if (typeof object.inkbird !== "object")
                    throw TypeError(".Api2.Log.inkbird: object expected");
                message.inkbird = $root.Api2.InkbirdLog.fromObject(object.inkbird);
            }
            if (object.powerMeter != null) {
                if (typeof object.powerMeter !== "object")
                    throw TypeError(".Api2.Log.powerMeter: object expected");
                message.powerMeter = $root.Api2.PowerMeterLog.fromObject(object.powerMeter);
            }
            if (object.netatmo != null) {
                if (typeof object.netatmo !== "object")
                    throw TypeError(".Api2.Log.netatmo: object expected");
                message.netatmo = $root.Api2.NetatmoLog.fromObject(object.netatmo);
            }
            return message;
        };

        /**
         * Creates a plain object from a Log message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Api2.Log
         * @static
         * @param {Api2.Log} message Log
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Log.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deviceId = "";
                object.unixtime = 0;
                object.inkbird = null;
                object.powerMeter = null;
                object.netatmo = null;
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.unixtime != null && message.hasOwnProperty("unixtime"))
                object.unixtime = message.unixtime;
            if (message.inkbird != null && message.hasOwnProperty("inkbird"))
                object.inkbird = $root.Api2.InkbirdLog.toObject(message.inkbird, options);
            if (message.powerMeter != null && message.hasOwnProperty("powerMeter"))
                object.powerMeter = $root.Api2.PowerMeterLog.toObject(message.powerMeter, options);
            if (message.netatmo != null && message.hasOwnProperty("netatmo"))
                object.netatmo = $root.Api2.NetatmoLog.toObject(message.netatmo, options);
            return object;
        };

        /**
         * Converts this Log to JSON.
         * @function toJSON
         * @memberof Api2.Log
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Log.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Log
         * @function getTypeUrl
         * @memberof Api2.Log
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Api2.Log";
        };

        return Log;
    })();

    Api2.Logs = (function() {

        /**
         * Properties of a Logs.
         * @memberof Api2
         * @interface ILogs
         * @property {Array.<Api2.ILog>|null} [log] Logs log
         */

        /**
         * Constructs a new Logs.
         * @memberof Api2
         * @classdesc Represents a Logs.
         * @implements ILogs
         * @constructor
         * @param {Api2.ILogs=} [properties] Properties to set
         */
        function Logs(properties) {
            this.log = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Logs log.
         * @member {Array.<Api2.ILog>} log
         * @memberof Api2.Logs
         * @instance
         */
        Logs.prototype.log = $util.emptyArray;

        /**
         * Creates a new Logs instance using the specified properties.
         * @function create
         * @memberof Api2.Logs
         * @static
         * @param {Api2.ILogs=} [properties] Properties to set
         * @returns {Api2.Logs} Logs instance
         */
        Logs.create = function create(properties) {
            return new Logs(properties);
        };

        /**
         * Encodes the specified Logs message. Does not implicitly {@link Api2.Logs.verify|verify} messages.
         * @function encode
         * @memberof Api2.Logs
         * @static
         * @param {Api2.ILogs} message Logs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Logs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.log != null && message.log.length)
                for (var i = 0; i < message.log.length; ++i)
                    $root.Api2.Log.encode(message.log[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Logs message, length delimited. Does not implicitly {@link Api2.Logs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Api2.Logs
         * @static
         * @param {Api2.ILogs} message Logs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Logs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Logs message from the specified reader or buffer.
         * @function decode
         * @memberof Api2.Logs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Api2.Logs} Logs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Logs.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Api2.Logs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.log && message.log.length))
                            message.log = [];
                        message.log.push($root.Api2.Log.decode(reader, reader.uint32()));
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
         * @memberof Api2.Logs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Api2.Logs} Logs
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
         * @memberof Api2.Logs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Logs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.log != null && message.hasOwnProperty("log")) {
                if (!Array.isArray(message.log))
                    return "log: array expected";
                for (var i = 0; i < message.log.length; ++i) {
                    var error = $root.Api2.Log.verify(message.log[i]);
                    if (error)
                        return "log." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Logs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Api2.Logs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Api2.Logs} Logs
         */
        Logs.fromObject = function fromObject(object) {
            if (object instanceof $root.Api2.Logs)
                return object;
            var message = new $root.Api2.Logs();
            if (object.log) {
                if (!Array.isArray(object.log))
                    throw TypeError(".Api2.Logs.log: array expected");
                message.log = [];
                for (var i = 0; i < object.log.length; ++i) {
                    if (typeof object.log[i] !== "object")
                        throw TypeError(".Api2.Logs.log: object expected");
                    message.log[i] = $root.Api2.Log.fromObject(object.log[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Logs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Api2.Logs
         * @static
         * @param {Api2.Logs} message Logs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Logs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.log = [];
            if (message.log && message.log.length) {
                object.log = [];
                for (var j = 0; j < message.log.length; ++j)
                    object.log[j] = $root.Api2.Log.toObject(message.log[j], options);
            }
            return object;
        };

        /**
         * Converts this Logs to JSON.
         * @function toJSON
         * @memberof Api2.Logs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Logs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Logs
         * @function getTypeUrl
         * @memberof Api2.Logs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Logs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Api2.Logs";
        };

        return Logs;
    })();

    return Api2;
})();

$root.Api = (function() {

    /**
     * Namespace Api.
     * @exports Api
     * @namespace
     */
    var Api = {};

    Api.Status = (function() {

        /**
         * Properties of a Status.
         * @memberof Api
         * @interface IStatus
         * @property {string|null} [machineId] Status machineId
         * @property {string|null} [key] Status key
         * @property {string|null} [value] Status value
         */

        /**
         * Constructs a new Status.
         * @memberof Api
         * @classdesc Represents a Status.
         * @implements IStatus
         * @constructor
         * @param {Api.IStatus=} [properties] Properties to set
         */
        function Status(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Status machineId.
         * @member {string} machineId
         * @memberof Api.Status
         * @instance
         */
        Status.prototype.machineId = "";

        /**
         * Status key.
         * @member {string} key
         * @memberof Api.Status
         * @instance
         */
        Status.prototype.key = "";

        /**
         * Status value.
         * @member {string} value
         * @memberof Api.Status
         * @instance
         */
        Status.prototype.value = "";

        /**
         * Creates a new Status instance using the specified properties.
         * @function create
         * @memberof Api.Status
         * @static
         * @param {Api.IStatus=} [properties] Properties to set
         * @returns {Api.Status} Status instance
         */
        Status.create = function create(properties) {
            return new Status(properties);
        };

        /**
         * Encodes the specified Status message. Does not implicitly {@link Api.Status.verify|verify} messages.
         * @function encode
         * @memberof Api.Status
         * @static
         * @param {Api.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.machineId != null && Object.hasOwnProperty.call(message, "machineId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.machineId);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link Api.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Api.Status
         * @static
         * @param {Api.IStatus} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof Api.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Api.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Api.Status();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.machineId = reader.string();
                        break;
                    }
                case 2: {
                        message.key = reader.string();
                        break;
                    }
                case 3: {
                        message.value = reader.string();
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
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Api.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Api.Status} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Status message.
         * @function verify
         * @memberof Api.Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.machineId != null && message.hasOwnProperty("machineId"))
                if (!$util.isString(message.machineId))
                    return "machineId: string expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Api.Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Api.Status} Status
         */
        Status.fromObject = function fromObject(object) {
            if (object instanceof $root.Api.Status)
                return object;
            var message = new $root.Api.Status();
            if (object.machineId != null)
                message.machineId = String(object.machineId);
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Api.Status
         * @static
         * @param {Api.Status} message Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Status.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.machineId = "";
                object.key = "";
                object.value = "";
            }
            if (message.machineId != null && message.hasOwnProperty("machineId"))
                object.machineId = message.machineId;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Status to JSON.
         * @function toJSON
         * @memberof Api.Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Status
         * @function getTypeUrl
         * @memberof Api.Status
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Api.Status";
        };

        return Status;
    })();

    return Api;
})();

module.exports = $root;
