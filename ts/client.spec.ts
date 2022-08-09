import fs from 'fs';
import {mocked} from 'jest-mock';
import fetch from 'node-fetch';
import {DateTime, Settings} from 'luxon';

import {Logs} from '../proto/genfiles/api_pb';
import {ClientApi} from './client';
const {Response} = jest.requireActual('node-fetch');

jest.mock('fs');
jest.mock('node-fetch');

describe('ClientApi', () => {
  beforeAll(() => {
    const now = DateTime.local(2022, 8, 10);
    Settings.now = () => now.toMillis();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('RPC succeeds', async() => {
    mocked(fetch).mockResolvedValue(new Response('content'));

    const api = new ClientApi('/nonexistent', 'machineId');
    const log = Logs.SaveSensorDataRequest.create({
      logs: {
        inkbird: [
          {
            deviceId: 'deviceId1',
            unixtime: 1,
            temperatureE2: 3000,
            humidityE2: 8000,
            batteryPercent: 90,
          },
          {
            deviceId: 'deviceId2',
            unixtime: 1,
            temperatureE2: 30,
            humidityE2: 80,
            batteryPercent: 90,
          },
        ]
      }
    });
    await api.saveSensorProto(log);

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith('https://brewery-app.com/api/client/saveSensorProto', {
      method: 'POST',
      timeout: 5 * 1000,
      headers: {'Content-Type': 'application/json'},
      body: Logs.SaveSensorDataRequest.encode(log).finish(),
    });
    expect(fs.appendFileSync).toBeCalledTimes(0);
  });

  test('RPC fails and save to local storage', async() => {
    // Failed to save on server.
    mocked(fetch).mockRejectedValueOnce(new Error('some error'));
    const now = DateTime.local(2022, 8, 10);
    Settings.now = () => now.toMillis();

    const api = new ClientApi('/nonexistent', 'machineId');
    const log = Logs.SaveSensorDataRequest.create({
      logs: {
        inkbird: [
          {
            deviceId: 'deviceId1',
            unixtime: 1,
            temperatureE2: 3000,
            humidityE2: 8000,
            batteryPercent: 90,
          },
          {
            deviceId: 'deviceId2',
            unixtime: 1,
            temperatureE2: 30,
            humidityE2: 80,
            batteryPercent: 90,
          },
        ]
      }
    });
    await api.saveSensorProto(log);

    expect(fs.appendFileSync).toBeCalledTimes(1);
    expect(fs.appendFileSync).toBeCalledWith(
      '/nonexistent/1660057200000',
      Logs.Logs.encode(log.logs!).finish()
    );
  });
});

// class FakeDirent extends fs.Dirent {
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }

//   isFile() {
//     return true;
//   }
// }
