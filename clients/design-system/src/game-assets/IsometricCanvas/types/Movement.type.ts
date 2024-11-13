import { DateTime } from 'luxon';
import { Position } from './Position.type';

// Movement data for tracking position changes and completion
export type Movement = {
  targetPosition: Position; // Target position actor is moving towards
  currentPosition: Position; // Current position of the actor
  movementDuration: number; // How long it takes to reach the target (in seconds)
  isInMotion: boolean; // Is the actor currently moving?
  targetPositionReached: boolean; // Has the actor reached the target position?
  startTimestamp?: DateTime; // Time when movement started
  endTimestamp?: DateTime; // Time when movement should end
};
