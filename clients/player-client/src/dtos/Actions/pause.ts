import { Duration } from 'luxon';

export function pause(duration: Duration): Promise<void> {
  return new Promise(resolve =>
    setTimeout(resolve, duration.as('milliseconds')),
  );
}
