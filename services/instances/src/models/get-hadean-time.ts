export type GameDateTime = {
  minute: number;
  hour: number;
  day: number;
  year: number;
};

/**
 * The point at which time equals 00E-000-0000HT
 */
export const PLAY_HOURS_HADEAN_ZERO_POINT = 200;

/**
 * Convert real time, which flows faster, to game time
 * One minute is ~3 minutes, there is ~8 hours in a day, and 300 days a year
 */
export function convertPlayTimeToGameTime(realMinutes: number): GameDateTime {
  const instanceMinutes = (realMinutes * 3) % 60;
  const instanceHour = Math.floor((realMinutes * 3) / 60) % 8;
  const instanceDay = Math.floor((realMinutes * 3) / 60 / 8) % 300;
  const instanceYear = Math.floor((realMinutes * 3) / 60 / 8 / 300);

  return {
    minute: instanceMinutes,
    hour: instanceHour,
    day: instanceDay,
    year: instanceYear,
  } as const;
}

/**
 * Converts playtime duration into Hadean Time (HT) format, e.g.
 *
 * Hadean Time (HT) is the time period in which the universe began.
 * Within the game, time progresses in reverse based on playtime duration.
 * Time is displayed to the User using a HT format.
 *
 * Hadean Time Format: -00E-053-0125HT
 *
 * The first part, the sign ('-' or '+'), indicates whether the game is
 * counting down ('-') or counting up ('+') to when the universe begins,
 * 5 billion years ago, based on playtime duration. The second part represents
 * the number of Hadean Years (00E). The third part represents the remaining
 * Hadean Days within the current Hadean Year. The fourth part represents the
 * remaining Hadean Hours and Minutes within the current Hadean Day.
 */
export function getHadeanTime(playtimeDurationInMinutes: number): string {
  const minutesPerHour = 60;
  const maxPlaytimeDurationInRealMinutes = PLAY_HOURS_HADEAN_ZERO_POINT * minutesPerHour;
  const remainingPlaytimeInMinutes = Math.abs(
    maxPlaytimeDurationInRealMinutes - playtimeDurationInMinutes,
  );

  const gameTime = convertPlayTimeToGameTime(remainingPlaytimeInMinutes);

  let sign;
  switch (true) {
    case playtimeDurationInMinutes < maxPlaytimeDurationInRealMinutes:
      sign = '-';
      break;
    case playtimeDurationInMinutes > maxPlaytimeDurationInRealMinutes:
      sign = '+';
      break;
    default:
      sign = '';
      break;
  }

  let formattedResult = `${sign}`;
  formattedResult += `${gameTime.year.toString().padStart(2, '0')}`;
  formattedResult += 'E';
  formattedResult += `-${gameTime.day.toString().padStart(3, '0')}`;
  formattedResult += `-${gameTime.hour.toString().padStart(2, '0')}`;
  formattedResult += `${gameTime.minute.toString().padStart(2, '0')}`;
  formattedResult += 'HT';

  return formattedResult;
}
