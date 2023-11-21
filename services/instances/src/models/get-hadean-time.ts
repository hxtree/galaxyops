export const MAX_PLAYTIME_DURATION_HOURS = 200;

/**
 * Converts playtime duration into Hadean Time (HT) format.
 *
 * Hadean Time (HT) is the time period in which the universe began.
 * Within the game, time progresses in reverse based on playtime duration.
 * A "-" prefix before the time period indicates that the game is
 * counting down to when the universe begins, 5 billion years ago.
 * A "+" prefix indicates that playtime has exceeded the maximum and the game
 * is counting up from the start of the Hadean era.
 * Time is displayed to the User using a HT format.
 *
 * Hadean Time Format: -00E-053-0125HT
 *
 * - The first part, the sign ('-' or '+'), indicates whether the game is counting down ('-')
 *   or counting up ('+') based on playtime duration.
 *
 * - The second part represents the number of Hadean Years (E-053), which is the
 *   overarching unit of time in the Hadean Time system. It represents the elapsed time
 *   since the start of the Hadean era, with each Hadean Year corresponding to
 *   approximately 300 Hadean Days.
 *
 * - The third part represents the remaining Hadean Days within the current Hadean Year.
 *   These days are calculated based on the remaining playtime in the game.
 *
 * - The fourth part represents the remaining Hadean Hours within the current Hadean Day.
 *   These hours are also calculated based on the remaining playtime.
 *
 * @param {number} playtimeDurationInMinutes - The duration of playtime in minutes.
 * @returns {string} The Hadean Time formatted string.
 */
export function getHadeanTime(playtimeDurationInMinutes: number): string {
  const minutesPerHour = 60;
  const hadeanDayDuration = 8 * minutesPerHour;
  const hadeanYearDuration = 300 * hadeanDayDuration;

  const maxPlaytimeDurationInRealMinutes = MAX_PLAYTIME_DURATION_HOURS * minutesPerHour;

  const remainingPlaytimeInMinutes = Math.min(
    playtimeDurationInMinutes,
    maxPlaytimeDurationInRealMinutes,
  );

  if (remainingPlaytimeInMinutes === maxPlaytimeDurationInRealMinutes) {
    return '-00E-000-0000HT'; // Hadean Time is all zeros after max playtime
  }

  const remainingHadeanYears = Math.floor(
    remainingPlaytimeInMinutes / hadeanYearDuration,
  );
  const remainingHadeanDays = Math.floor(
    (remainingPlaytimeInMinutes % hadeanYearDuration) / hadeanDayDuration,
  );
  const remainingHadeanHours = Math.floor(
    (remainingPlaytimeInMinutes % hadeanDayDuration) / minutesPerHour,
  );

  const sign = playtimeDurationInMinutes > maxPlaytimeDurationInRealMinutes ? '+' : '-';

  const formattedResult = `${sign}${remainingHadeanYears
    .toString()
    .padStart(2, '0')}E-${remainingHadeanDays
    .toString()
    .padStart(3, '0')}-${remainingHadeanHours.toString().padStart(4, '0')}HT`;

  return formattedResult;
}
