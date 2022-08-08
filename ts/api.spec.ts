import fs from 'fs';
import {mocked} from 'jest-mock';
import fetch, {Response} from 'node-fetch';

import {Logs} from '../proto/genfiles/api_pb';
import {BreweryKitApi} from './api';

jest.mock('fs');
jest.mock('node-fetch');
jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

function buildBuffer(logProtoArray: Logs.Logs[]): Buffer {
  const buffers: Uint8Array[] = [];
  for (const logProto of logProtoArray) {
    buffers.push(Buffer.from(Logs.Logs.encode(logProto).finish()));
  }
  return Buffer.concat(buffers);
}

describe('Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Mocking fs', () => {
    mocked(fs.readFileSync).mockReturnValue('content');
    const a = fs.readFileSync('/tmp/foo');
    expect(a).toEqual('content');
  });

  test('Mocking fetch', async() => {
    mocked(fetch).mockReturnValue(
      Promise.resolve(new Response('ng', {status: 200}))
    );

    await fetch('http://example.com');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toBeCalledWith('http://example.com');
    // expect(result.body).toEqual('ok');
  });

  test('BreweryKitApi.saveInkbirdData saveToLocalCache', async() => {
    // Failed to save on server.
    mocked(fetch).mockReturnValue(Promise.reject(new Error('error')));
    // No local cache at this point.
    mocked(fs.readFileSync).mockReturnValueOnce('');

    const api = new BreweryKitApi('/non_existent_dir', 'testMachineId');
    await api.saveInkbirdData(
      [
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
      false
    );

    expect(fs.appendFileSync).toBeCalledTimes(2);
    expect(fs.appendFileSync).toBeCalledWith(
      '/non_existent_dir/1577836800',
      '{"deviceId":"deviceId1","unixtime":1,"temperature":30,"humidity":80,"battery":90}\n'
    );
    expect(fs.appendFileSync).toBeCalledWith(
      '/non_existent_dir/1577836800',
      '{"deviceId":"deviceId2","unixtime":1,"temperature":30,"humidity":80,"battery":90}\n'
    );
  });

  test('BreweryKitApi.saveInkbirdData resendToServer', async() => {
    // Setup local cache.
    mocked(fs.readdirSync).mockReturnValue([new FakeDirent('file1')]);
    const entry1 =
      '{"deviceId":"deviceId1","unixtime":1,"temperature":30,"humidity":80,"battery":90}';
    const entry2 =
      '{"deviceId":"deviceId2","unixtime":1,"temperature":30,"humidity":80,"battery":90}';
    mocked(fs.readFileSync).mockReturnValue(entry1 + '\n' + entry2 + '\n');

    // Save to server.
    mocked(fetch).mockReturnValue(Promise.resolve(new Response('response')));

    const api = new BreweryKitApi('/non_existent_dir', 'testMachineId');
    await api.startBackgroundTask(
      () => {
        api.stopBackgroundTask();
      },
      true,
      false
    );

    expect(fs.readdirSync).toBeCalledTimes(1);
    expect(fs.readFileSync).toBeCalledTimes(1);
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(
      'https://brewery-app.com/api/client/saveInkbirdData',
      {
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
      }
    );
    expect(fs.writeSync).toBeCalledTimes(2);
    expect(fs.writeSync).toBeCalledWith(
      undefined,
      ' '.repeat(entry1.length),
      0
    );
    expect(fs.writeSync).toBeCalledWith(
      undefined,
      ' '.repeat(entry2.length),
      (entry1 + '\n').length
    );
  });

  test('BreweryKitApi.splitSensorProto', () => {
    const powerMeterEntries = [];
    for (let i = 0; i < 50; i++) {
      powerMeterEntries.push({
        deviceId: 'deviceId',
        unixtime: i,
        wattE1: 1000,
      });
    }

    const request = Logs.SaveSensorDataRequest.create({
      machineId: 'testMachine',
      logs: {powerMeter: powerMeterEntries},
    });

    const splittedData: Logs.SaveSensorDataRequest[] =
      BreweryKitApi.splitSensorProto(request, 10);
    expect(splittedData.length).toBe(5);
    for (let i = 0; i < 5; i++) {
      expect(splittedData[i]?.logs?.powerMeter?.length).toBe(10);
      for (let j = 0; j < 10; j++) {
        const entries = splittedData[i]?.logs?.powerMeter;
        expect(entries![j]?.unixtime).toBe(i * 10 + j);
      }
    }
  });

  test('BreweryKitApi.SaveSensorProto saveToLocalCache', async() => {
    // No local cache at this point.
    mocked(fs.readFileSync).mockReturnValue('');
    // Failed to save on server.
    mocked(fetch).mockReturnValue(Promise.reject(new Error('error')));

    const api = new BreweryKitApi('/non_existent_dir', 'testMachineId');
    const data: Logs.SaveSensorDataRequest = Logs.SaveSensorDataRequest.create({
      machineId: 'machineId',
      logs: {
        inkbird: [
          {
            deviceId: 'deviceId1',
            temperatureE2: 3000,
            humidityE2: 8000,
            batteryPercent: 90,
            unixtime: 1,
          },
          {
            deviceId: 'deviceId2',
            temperatureE2: 3000,
            humidityE2: 8000,
            batteryPercent: 90,
            unixtime: 1,
          },
        ],
      },
    });
    await api.saveSensorProto(data);

    expect(fs.appendFileSync).toBeCalledTimes(1);
    expect(fs.appendFileSync).toBeCalledWith(
      '/non_existent_dir/inkbird/1577836800',
      Logs.Logs.encode(data.logs!).finish()
    );
  });

  test('BreweryKitApi.SaveSensorProto resendToServer', async() => {
    // Setup local cache.
    mocked(fs.readdirSync).mockReturnValueOnce([new FakeDirent('file1')]);
    mocked(fs.readdirSync).mockReturnValueOnce([]);
    mocked(fs.readdirSync).mockReturnValueOnce([]);
    const payload = {
      inkbird: [
        {
          unixtime: 1,
          temperatureE2: 3000,
          humidityE2: 8000,
          batteryPercent: 90,
          deviceId: 'deviceId1',
        },
        {
          unixtime: 1,
          temperatureE2: 3000,
          humidityE2: 8000,
          batteryPercent: 90,
          deviceId: 'deviceId2',
        },
      ],
    };
    mocked(fs.readFileSync).mockReturnValueOnce(buildBuffer([Logs.Logs.create(payload)]));

    // Save to server.
    mocked(fetch).mockReturnValue(Promise.resolve(new Response('response')));

    const api = new BreweryKitApi('/non_existent_dir', 'testMachineId');
    await api.startBackgroundTask(
      () => {
        api.stopBackgroundTask();
      },
      false,
      true
    );

    const payloadProto = Logs.SaveSensorDataRequest.create({
      backfill: true,
      machineId: 'testMachineId',
      logs: payload,
    });
    const expectedBuffer: Uint8Array =
      Logs.SaveSensorDataRequest.encode(payloadProto).finish();

    expect(fs.readdirSync).toBeCalledTimes(3);
    expect(fs.readFileSync).toBeCalledTimes(1);
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(
      'https://brewery-app.com/api/client/saveSensorProto',
      {
        body: expectedBuffer,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        timeout: 5000,
      }
    );
    expect(fs.unlinkSync).toBeCalledTimes(1);
  });
});

class FakeDirent extends fs.Dirent {
  constructor(name: string) {
    super();
    this.name = name;
  }

  isFile() {
    return true;
  }
}
