import { DateTime, Duration } from 'luxon';
import { Position } from './Position.type';

// Movement data for tracking position changes and completion
export type Movement = {
  currentPosition?: Position;
  targetPosition?: Position;
  movementDuration?: Duration;
  startTimestamp: DateTime;
  endTimestamp?: DateTime;
};
