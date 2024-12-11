import { IsBoolean, IsDateString, IsString, IsNumber } from 'class-validator';
import { DateTime, Duration } from 'luxon';

export class ActorAnimation {
  @IsNumber()
  startingFrame?: number;

  @IsNumber()
  totalFrames: number;

  @IsNumber()
  animationDuration?: number;

  // @IsNumber()
  frameDuration: Duration;

  @IsBoolean()
  isAnimating?: false;

  @IsDateString()
  startTime: DateTime;

  @IsString()
  currentAnimation?: string;

  @IsNumber()
  currentFrame?: number;

  startTimestamp?: DateTime; // Time when the animation started
  endTimestamp?: DateTime; // Time when the animation should end
}
