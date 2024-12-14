import { IsBoolean, ValidateNested, IsDateString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
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

  @Transform(({ value }) => Duration.fromObject(value), { toClassOnly: true })
  @Transform(({ value }) => value.toObject(), { toPlainOnly: true })
  movementDuration?: Duration;

  @IsDateString()
  startTimestamp: DateTime;

  /**
   * Returns the current position of the actor where they should be rendered from
   */
  get renderPosition(): Coordinate3d {
    // Determine if the target position is closer to the camera than the current position
    if (
      this.targetPosition.x > this.currentPosition.x ||
      this.targetPosition.y > this.currentPosition.y
    ) {
      return this.targetPosition;
    }
    return this.position;
  }

  get position(): Coordinate3d {
    if (this.targetPositionReached) {
      return this.targetPosition;
    }
    return this.currentPosition;
  }

  get endTimestamp(): DateTime | null {
    if (!this.startTimestamp || !this.movementDuration) {
      return null;
    }
    return this.startTimestamp.plus(this.movementDuration);
  }

  get targetPositionReached(): boolean {
    const now = DateTime.now();
    if (this.endTimestamp && now > this.endTimestamp) {
      return true;
    }
    return false;
  }
}
