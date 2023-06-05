import * as $protobuf from "protobufjs";
/** Namespace Logs. */
export namespace Logs {

    /** Properties of an InkbirdLog. */
    interface IInkbirdLog {

        /** InkbirdLog deviceId */
        deviceId?: (string|null);

        /** InkbirdLog unixtime */
        unixtime?: (number|null);

        /** InkbirdLog temperatureE2 */
        temperatureE2?: (number|null);

        /** InkbirdLog humidityE2 */
        humidityE2?: (number|null);

        /** InkbirdLog batteryPercent */
        batteryPercent?: (number|null);
    }

    /** Represents an InkbirdLog. */
    class InkbirdLog implements IInkbirdLog {

        /**
         * Constructs a new InkbirdLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: Logs.IInkbirdLog);

        /** InkbirdLog deviceId. */
        public deviceId: string;

        /** InkbirdLog unixtime. */
        public unixtime: number;

        /** InkbirdLog temperatureE2. */
        public temperatureE2: number;

        /** InkbirdLog humidityE2. */
        public humidityE2: number;

        /** InkbirdLog batteryPercent. */
        public batteryPercent: number;

        /**
         * Creates a new InkbirdLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InkbirdLog instance
         */
        public static create(properties?: Logs.IInkbirdLog): Logs.InkbirdLog;

        /**
         * Encodes the specified InkbirdLog message. Does not implicitly {@link Logs.InkbirdLog.verify|verify} messages.
         * @param message InkbirdLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Logs.IInkbirdLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InkbirdLog message, length delimited. Does not implicitly {@link Logs.InkbirdLog.verify|verify} messages.
         * @param message InkbirdLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Logs.IInkbirdLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InkbirdLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InkbirdLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Logs.InkbirdLog;

        /**
         * Decodes an InkbirdLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InkbirdLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Logs.InkbirdLog;

        /**
         * Verifies an InkbirdLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InkbirdLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InkbirdLog
         */
        public static fromObject(object: { [k: string]: any }): Logs.InkbirdLog;

        /**
         * Creates a plain object from an InkbirdLog message. Also converts values to other types if specified.
         * @param message InkbirdLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Logs.InkbirdLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InkbirdLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InkbirdLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PowerMeterLog. */
    interface IPowerMeterLog {

        /** PowerMeterLog deviceId */
        deviceId?: (string|null);

        /** PowerMeterLog unixtime */
        unixtime?: (number|null);

        /** PowerMeterLog watt */
        watt?: (number|null);

        /** PowerMeterLog wattE1 */
        wattE1?: (number|null);
    }

    /** Represents a PowerMeterLog. */
    class PowerMeterLog implements IPowerMeterLog {

        /**
         * Constructs a new PowerMeterLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: Logs.IPowerMeterLog);

        /** PowerMeterLog deviceId. */
        public deviceId: string;

        /** PowerMeterLog unixtime. */
        public unixtime: number;

        /** PowerMeterLog watt. */
        public watt: number;

        /** PowerMeterLog wattE1. */
        public wattE1: number;

        /**
         * Creates a new PowerMeterLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PowerMeterLog instance
         */
        public static create(properties?: Logs.IPowerMeterLog): Logs.PowerMeterLog;

        /**
         * Encodes the specified PowerMeterLog message. Does not implicitly {@link Logs.PowerMeterLog.verify|verify} messages.
         * @param message PowerMeterLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Logs.IPowerMeterLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PowerMeterLog message, length delimited. Does not implicitly {@link Logs.PowerMeterLog.verify|verify} messages.
         * @param message PowerMeterLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Logs.IPowerMeterLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PowerMeterLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PowerMeterLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Logs.PowerMeterLog;

        /**
         * Decodes a PowerMeterLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PowerMeterLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Logs.PowerMeterLog;

        /**
         * Verifies a PowerMeterLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PowerMeterLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PowerMeterLog
         */
        public static fromObject(object: { [k: string]: any }): Logs.PowerMeterLog;

        /**
         * Creates a plain object from a PowerMeterLog message. Also converts values to other types if specified.
         * @param message PowerMeterLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Logs.PowerMeterLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PowerMeterLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PowerMeterLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NetatmoLog. */
    interface INetatmoLog {

        /** NetatmoLog deviceId */
        deviceId?: (string|null);

        /** NetatmoLog unixtime */
        unixtime?: (number|null);

        /** NetatmoLog temperatureE2 */
        temperatureE2?: (number|null);

        /** NetatmoLog humidity */
        humidity?: (number|null);

        /** NetatmoLog co2Level */
        co2Level?: (number|null);

        /** NetatmoLog airPressureE1 */
        airPressureE1?: (number|null);

        /** NetatmoLog noiseLevel */
        noiseLevel?: (number|null);
    }

    /** Represents a NetatmoLog. */
    class NetatmoLog implements INetatmoLog {

        /**
         * Constructs a new NetatmoLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: Logs.INetatmoLog);

        /** NetatmoLog deviceId. */
        public deviceId: string;

        /** NetatmoLog unixtime. */
        public unixtime: number;

        /** NetatmoLog temperatureE2. */
        public temperatureE2: number;

        /** NetatmoLog humidity. */
        public humidity: number;

        /** NetatmoLog co2Level. */
        public co2Level: number;

        /** NetatmoLog airPressureE1. */
        public airPressureE1: number;

        /** NetatmoLog noiseLevel. */
        public noiseLevel: number;

        /**
         * Creates a new NetatmoLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetatmoLog instance
         */
        public static create(properties?: Logs.INetatmoLog): Logs.NetatmoLog;

        /**
         * Encodes the specified NetatmoLog message. Does not implicitly {@link Logs.NetatmoLog.verify|verify} messages.
         * @param message NetatmoLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Logs.INetatmoLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NetatmoLog message, length delimited. Does not implicitly {@link Logs.NetatmoLog.verify|verify} messages.
         * @param message NetatmoLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Logs.INetatmoLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetatmoLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetatmoLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Logs.NetatmoLog;

        /**
         * Decodes a NetatmoLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NetatmoLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Logs.NetatmoLog;

        /**
         * Verifies a NetatmoLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NetatmoLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetatmoLog
         */
        public static fromObject(object: { [k: string]: any }): Logs.NetatmoLog;

        /**
         * Creates a plain object from a NetatmoLog message. Also converts values to other types if specified.
         * @param message NetatmoLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Logs.NetatmoLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetatmoLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NetatmoLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Logs. */
    interface ILogs {

        /** Logs inkbird */
        inkbird?: (Logs.IInkbirdLog[]|null);

        /** Logs powerMeter */
        powerMeter?: (Logs.IPowerMeterLog[]|null);

        /** Logs netatmo */
        netatmo?: (Logs.INetatmoLog[]|null);
    }

    /** Represents a Logs. */
    class Logs implements ILogs {

        /**
         * Constructs a new Logs.
         * @param [properties] Properties to set
         */
        constructor(properties?: Logs.ILogs);

        /** Logs inkbird. */
        public inkbird: Logs.IInkbirdLog[];

        /** Logs powerMeter. */
        public powerMeter: Logs.IPowerMeterLog[];

        /** Logs netatmo. */
        public netatmo: Logs.INetatmoLog[];

        /**
         * Creates a new Logs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Logs instance
         */
        public static create(properties?: Logs.ILogs): Logs.Logs;

        /**
         * Encodes the specified Logs message. Does not implicitly {@link Logs.Logs.verify|verify} messages.
         * @param message Logs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Logs.ILogs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Logs message, length delimited. Does not implicitly {@link Logs.Logs.verify|verify} messages.
         * @param message Logs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Logs.ILogs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Logs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Logs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Logs.Logs;

        /**
         * Decodes a Logs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Logs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Logs.Logs;

        /**
         * Verifies a Logs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Logs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Logs
         */
        public static fromObject(object: { [k: string]: any }): Logs.Logs;

        /**
         * Creates a plain object from a Logs message. Also converts values to other types if specified.
         * @param message Logs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Logs.Logs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Logs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Logs
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
