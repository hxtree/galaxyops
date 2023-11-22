import { convertPlayTimeToGameTime, GameDateTime } from './get-hadean-time';

describe('convertPlayTimeToGameTime()', () => {
  it.each([
    [0, {
      minute: 0, hour: 0, day: 0, year: 0,
    }],
    [1, {
      minute: 3, hour: 0, day: 0, year: 0,
    }],
    [20, {
      minute: 0, hour: 1, day: 0, year: 0,
    }],
    [21, {
      minute: 3, hour: 1, day: 0, year: 0,
    }],
    [160, {
      minute: 0, hour: 0, day: 1, year: 0,
    }],
    [161, {
      minute: 3, hour: 0, day: 1, year: 0,
    }],
    [48000, {
      minute: 0, hour: 0, day: 0, year: 1,
    }],
  ])(
    'should convert %s playTime to %s gameDateTime',
    async (playTime: number, gameDateTime: GameDateTime) => {
      const {
        minute, hour, day, year,
      } = convertPlayTimeToGameTime(playTime);
      expect(minute).toBe(gameDateTime.minute);
      expect(hour).toBe(gameDateTime.hour);
      expect(day).toBe(gameDateTime.day);
      expect(year).toBe(gameDateTime.year);
    },
  );
});
