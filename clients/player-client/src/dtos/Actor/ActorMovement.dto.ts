import { IsBoolean, ValidateNested, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';
import { Duration, DateTime } from 'luxon';
import { Coordinate3d } from '../Coordinate3d.dto';

export class ActorMovement {
  @IsBoolean()
  isInMotion: boolean;

  @ValidateNested()
  @Type(() => Coordinate3d)
  currentPosition: Coordinate3d;

  @ValidateNested()
  @Type(() => Coordinate3d)
  targetPosition: Coordinate3d;

  // TODO type for duration

  movementDuration?: Duration; // Duration of the movement (in seconds) ???

  @IsBoolean()
  targetPositionReached: boolean;

  @IsDateString()
  startTimestamp: DateTime;

  @IsDateString()
  endTimestamp?: DateTime;
}
