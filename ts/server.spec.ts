import fs from 'fs';
import {mocked} from 'jest-mock';

import {DateTime} from 'luxon';
import {Logs} from '../proto/genfiles/api_pb';
import {ServerApi} from './server';

jest.mock('fs');
jest.mock('node-fetch');

describe('ServerApi', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Save and load succeeds', () => {
    const api = new ServerApi('/nonexistent');
    const log1 = Logs.Logs.create({
      inkbird: [
        {
          deviceId: 'deviceId',
          unixtime: 1660058286,
          temperatureE2: 3000,
          humidityE2: 8000,
          batteryPercent: 90,
        }
      ]
    });
    const log2 = Logs.Logs.create({
      inkbird: [
        {
          deviceId: 'deviceId',
          unixtime: 1660058286,
          temperatureE2: 3000,
          humidityE2: 8000,
          batteryPercent: 90,
        }
      ]
    });

    // Save the data.
    api.save(log1);
    api.save(log2);

    // These field are not saved on disk to save space.
    delete log1.inkbird[0]!.deviceId;
    delete log2.inkbird[0]!.deviceId;
    expect(fs.appendFileSync).toBeCalledTimes(2);
    expect(fs.appendFileSync).toBeCalledWith(
      '/nonexistent/inkbird/deviceId/2022-08-10', Logs.Logs.encode(log1).finish());
    expect(fs.appendFileSync).toBeCalledWith(
      '/nonexistent/inkbird/deviceId/2022-08-10', Logs.Logs.encode(log2).finish());

    // Load the data.
    mocked(fs.readFileSync).mockReturnValue(Buffer.concat([
      Logs.Logs.encode(log1).finish(),
      Logs.Logs.encode(log2).finish(),
    ]));
    const loadedLog: Logs.Logs = api.load('inkbird', DateTime.local(2022, 8, 10));
    expect(loadedLog.inkbird.length).toBe(2);
  });
});
