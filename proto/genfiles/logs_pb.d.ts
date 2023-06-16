import * as $protobuf from "protobufjs";
/** Namespace Api. */
export namespace Api {

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
        constructor(properties?: Api.IInkbirdLog);

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
        public static create(properties?: Api.IInkbirdLog): Api.InkbirdLog;

        /**
         * Encodes the specified InkbirdLog message. Does not implicitly {@link Api.InkbirdLog.verify|verify} messages.
         * @param message InkbirdLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Api.IInkbirdLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InkbirdLog message, length delimited. Does not implicitly {@link Api.InkbirdLog.verify|verify} messages.
         * @param message InkbirdLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Api.IInkbirdLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InkbirdLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InkbirdLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Api.InkbirdLog;

        /**
         * Decodes an InkbirdLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InkbirdLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Api.InkbirdLog;

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
        public static fromObject(object: { [k: string]: any }): Api.InkbirdLog;

        /**
         * Creates a plain object from an InkbirdLog message. Also converts values to other types if specified.
         * @param message InkbirdLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Api.InkbirdLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: Api.IPowerMeterLog);

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
        public static create(properties?: Api.IPowerMeterLog): Api.PowerMeterLog;

        /**
         * Encodes the specified PowerMeterLog message. Does not implicitly {@link Api.PowerMeterLog.verify|verify} messages.
         * @param message PowerMeterLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Api.IPowerMeterLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PowerMeterLog message, length delimited. Does not implicitly {@link Api.PowerMeterLog.verify|verify} messages.
         * @param message PowerMeterLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Api.IPowerMeterLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PowerMeterLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PowerMeterLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Api.PowerMeterLog;

        /**
         * Decodes a PowerMeterLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PowerMeterLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Api.PowerMeterLog;

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
        public static fromObject(object: { [k: string]: any }): Api.PowerMeterLog;

        /**
         * Creates a plain object from a PowerMeterLog message. Also converts values to other types if specified.
         * @param message PowerMeterLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Api.PowerMeterLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: Api.INetatmoLog);

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
        public static create(properties?: Api.INetatmoLog): Api.NetatmoLog;

        /**
         * Encodes the specified NetatmoLog message. Does not implicitly {@link Api.NetatmoLog.verify|verify} messages.
         * @param message NetatmoLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Api.INetatmoLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NetatmoLog message, length delimited. Does not implicitly {@link Api.NetatmoLog.verify|verify} messages.
         * @param message NetatmoLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Api.INetatmoLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetatmoLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetatmoLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Api.NetatmoLog;

        /**
         * Decodes a NetatmoLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NetatmoLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Api.NetatmoLog;

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
        public static fromObject(object: { [k: string]: any }): Api.NetatmoLog;

        /**
         * Creates a plain object from a NetatmoLog message. Also converts values to other types if specified.
         * @param message NetatmoLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Api.NetatmoLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        inkbird?: (Api.IInkbirdLog[]|null);

        /** Logs powerMeter */
        powerMeter?: (Api.IPowerMeterLog[]|null);

        /** Logs netatmo */
        netatmo?: (Api.INetatmoLog[]|null);
    }

    /** Represents a Logs. */
    class Logs implements ILogs {

        /**
         * Constructs a new Logs.
         * @param [properties] Properties to set
         */
        constructor(properties?: Api.ILogs);

        /** Logs inkbird. */
        public inkbird: Api.IInkbirdLog[];

        /** Logs powerMeter. */
        public powerMeter: Api.IPowerMeterLog[];

        /** Logs netatmo. */
        public netatmo: Api.INetatmoLog[];

        /**
         * Creates a new Logs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Logs instance
         */
        public static create(properties?: Api.ILogs): Api.Logs;

        /**
         * Encodes the specified Logs message. Does not implicitly {@link Api.Logs.verify|verify} messages.
         * @param message Logs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Api.ILogs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Logs message, length delimited. Does not implicitly {@link Api.Logs.verify|verify} messages.
         * @param message Logs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Api.ILogs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Logs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Logs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Api.Logs;

        /**
         * Decodes a Logs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Logs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Api.Logs;

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
        public static fromObject(object: { [k: string]: any }): Api.Logs;

        /**
         * Creates a plain object from a Logs message. Also converts values to other types if specified.
         * @param message Logs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Api.Logs, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a Status. */
    interface IStatus {

        /** Status machineId */
        machineId?: (string|null);

        /** Status key */
        key?: (string|null);

        /** Status value */
        value?: (string|null);
    }

    /** Represents a Status. */
    class Status implements IStatus {

        /**
         * Constructs a new Status.
         * @param [properties] Properties to set
         */
        constructor(properties?: Api.IStatus);

        /** Status machineId. */
        public machineId: string;

        /** Status key. */
        public key: string;

        /** Status value. */
        public value: string;

        /**
         * Creates a new Status instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Status instance
         */
        public static create(properties?: Api.IStatus): Api.Status;

        /**
         * Encodes the specified Status message. Does not implicitly {@link Api.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Api.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link Api.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Api.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Api.Status;

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Api.Status;

        /**
         * Verifies a Status message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Status message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Status
         */
        public static fromObject(object: { [k: string]: any }): Api.Status;

        /**
         * Creates a plain object from a Status message. Also converts values to other types if specified.
         * @param message Status
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Api.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Status to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Status
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
