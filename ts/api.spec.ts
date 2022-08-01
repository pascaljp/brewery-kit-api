import {mocked} from 'jest-mock';
import fetch, { Response } from 'node-fetch';
import fs from 'fs';

import {BreweryKitApi} from './api';

jest.mock('fs');
jest.mock('node-fetch');
jest.mock('moment', () => {
  return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

describe('Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Mocking fs', () => {
    mocked(fs.readFileSync).mockReturnValue('content');
    const a = fs.readFileSync('/tmp/foo');
    expect(a).toEqual('content');
  });

  test('Mocking fs2', () => {
    mocked(fs.readFileSync).mockReturnValue('content');
    const a = fs.readFileSync('/tmp/foo');
    expect(a).toEqual('content');
  });

  test('Mocking fetch', async () => {
    mocked(fetch).mockReturnValue(Promise.resolve(new Response("ng", {"status": 200})));
  
    await fetch('http://example.com');
  
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toBeCalledWith('http://example.com');
    // expect(result.body).toEqual('ok');
  })

  test('BreweryKit.saveInkbirdData saveToLocalCache', async () => {
    // Failed to save on server.
    mocked(fetch).mockReturnValue(Promise.reject('error'));
    // No local cache at this point.
    mocked(fs.readFileSync).mockReturnValueOnce('');

    const api = new BreweryKitApi('/non_existent_dir', 'testMachineId');
    await api.saveInkbirdData([
      {deviceId: 'deviceId1', unixtime: 1, temperature: 30, humidity: 80, battery: 90},
      {deviceId: 'deviceId2', unixtime: 1, temperature: 30, humidity: 80, battery: 90},
    ], false);

    expect(fs.appendFileSync).toBeCalledTimes(2);
    expect(fs.appendFileSync).toBeCalledWith(
      '/non_existent_dir/1577836800',
      '{"deviceId":"deviceId1","unixtime":1,"temperature":30,"humidity":80,"battery":90}\n');
    expect(fs.appendFileSync).toBeCalledWith(
      '/non_existent_dir/1577836800',
      '{"deviceId":"deviceId2","unixtime":1,"temperature":30,"humidity":80,"battery":90}\n');
  });

  test('BreweryKit.saveInkbirdData resendToServer', async () => {
    // Setup local cache.
    mocked(fs.readdirSync).mockReturnValueOnce([new FakeDirent('file1')]);
    const entry1 = '{"deviceId":"deviceId1","unixtime":1,"temperature":30,"humidity":80,"battery":90}';
    const entry2 = '{"deviceId":"deviceId2","unixtime":1,"temperature":30,"humidity":80,"battery":90}';
    mocked(fs.readFileSync).mockReturnValue(entry1 + '\n' + entry2 + '\n');

    // Save to server.
    mocked(fetch).mockReturnValue(Promise.resolve(new Response('response')));
  
    const api = new BreweryKitApi('/non_existent_dir', 'testMachineId');
    await api.startBackgroundTask(() => {
      api.stopBackgroundTask();
    });
  
    expect(fs.readdirSync).toBeCalledTimes(1);
    expect(fs.readFileSync).toBeCalledTimes(1);
    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(
      "https://brewery-app.com/api/client/saveInkbirdData", {
        "body": JSON.stringify({
          "machineId": "testMachineId",
          "data": [
            {"deviceId": "deviceId1", "unixtime": 1, "temperature": 30, "humidity": 80, "battery": 90},
            {"deviceId": "deviceId2", "unixtime": 1, "temperature": 30, "humidity": 80, "battery": 90}
          ],
          "backfill": true
        }),
        "headers": {
          "Content-Type": "application/json"
        },
        "method": "POST",
        "timeout": 5000
      });
    expect(fs.writeSync).toBeCalledTimes(2);
    expect(fs.writeSync).toBeCalledWith(undefined, ' '.repeat(entry1.length), 0);
    expect(fs.writeSync).toBeCalledWith(undefined, ' '.repeat(entry2.length), (entry1 + '\n').length);
  });
});

class FakeDirent extends fs.Dirent {
  constructor(name: string) {
     super();
     this.name = name;
  }
  isFile() { return true; }
}
