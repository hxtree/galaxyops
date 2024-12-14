import {
  IsEnum,
  IsString,
  IsNumber,
  Min,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { ActorAnimation } from './ActorAnimation.dto';
import { Type } from 'class-transformer';
import { ActorMovement } from './ActorMovement.dto';
import { ActorState } from './ActorState.type';
import { DateTime } from 'luxon';
import { SpriteMapRecord } from '../SpriteMapRecord.dto';

export class Actor {
  @IsString()
  actorId: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  height?: number;

  @ValidateNested()
  @Type(() => ActorMovement)
  movement: ActorMovement;

  @IsEnum(ActorState)
  currentState: ActorState;

  @ValidateNested()
  @Type(() => ActorAnimation)
  animation: ActorAnimation;

  @ValidateNested({ each: true })
  @Type(() => SpriteMapRecord)
  spriteMapRegistry?: SpriteMapRecord[];

  lastUpdated?: DateTime; // Timestamp for when the actor's data was last updated

  /**
   * Returns the current position of the actor where they should be rendered from
   */
  get position() {
    // Determine if the target position is closer to the camera than the current position
    if (
      this.movement.targetPosition.x > this.movement.currentPosition.x ||
      this.movement.targetPosition.y > this.movement.currentPosition.y
    ) {
      return this.movement.targetPosition;
    }

    if (this.movement.targetPositionReached) {
      return this.movement.targetPosition;
    }
    return this.movement.currentPosition;
  }

  get isInMotion() {
    const now = DateTime.now();
    if (this.movement.endTimestamp && now > this.movement.endTimestamp) {
      return false;
    }
    return true;
  }
}
