import {
  IsBoolean,
  IsDateString,
  IsString,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { DateTime, Duration } from 'luxon';
import { ActorOrientation } from './ActorDirection.type';
import { Transform } from 'class-transformer';

export class ActorAnimation {
  @IsEnum(ActorOrientation)
  orientation: ActorOrientation;

  @IsBoolean()
  isAnimating?: false;

  @IsString()
  currentAnimation?: string;

  @IsNumber()
  startingFrame?: number;

  @IsNumber()
  totalFrames: number;

  @Transform(({ value }) => Duration.fromObject(value), { toClassOnly: true })
  @Transform(({ value }) => value.toObject(), { toPlainOnly: true })
  frameDuration: Duration;

  @IsNumber()
  currentFrame?: number;

  @IsNumber()
  animationDuration?: number;

  @IsDateString()
  startTimestamp?: DateTime; // Time when the animation started

  @IsDateString()
  endTimestamp?: DateTime; // Time when the animation should end
}
