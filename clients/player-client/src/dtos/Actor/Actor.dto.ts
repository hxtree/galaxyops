import {
  IsUrl,
  IsEnum,
  IsString,
  IsNumber,
  Min,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { ActorAnimation } from './ActorAnimation.dto';
import { Transform, Type } from 'class-transformer';
import { ActorMovement } from './ActorMovement.dto';
import { ActorState } from '../../core/IsometricCanvas/types/ActorState.type';
import { DateTime } from 'luxon';

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
  currentState?: ActorState;

  @ValidateNested()
  @Type(() => ActorAnimation)
  animation: ActorAnimation;

  @Transform(({ value }) => {
    return Object.keys(value).reduce(
      (acc, key) => {
        acc[key] = value[key];
        return acc;
      },
      {} as Record<string, string>,
    );
  })
  @IsString({ each: true })
  @IsUrl({}, { each: true })
  spriteMapRegistry: Record<string, string>;

  lastUpdated?: DateTime; // Timestamp for when the actor's data was last updated
}
