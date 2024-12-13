import { Transform } from 'class-transformer';
import { IsBoolean, IsDateString, IsString, IsNumber } from 'class-validator';
import { DateTime, Duration } from 'luxon';

export class GridAnimation {
  @IsString()
  id: string;

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

  @IsDateString()
  startTimestamp?: DateTime; // Time when the animation started

  @IsDateString()
  endTimestamp?: DateTime; // Time when the animation should end

  get duration(): Duration {
    return this.frameDuration.mapUnits(unit => unit * this.totalFrames);
  }

  get currentFrame(): number {
    let elapsedTime: Duration;

    if (this.startTimestamp) {
      const currentTime = DateTime.now();
      const elapsedMillis = currentTime
        .diff(this.startTimestamp)
        .as('milliseconds');
      elapsedTime = Duration.fromObject({ milliseconds: elapsedMillis });
    } else {
      elapsedTime = Duration.fromMillis(performance.now());
    }

    let currentFrame =
      Math.floor(elapsedTime.as('seconds') / this.frameDuration.as('seconds')) %
      this.totalFrames;

    if (this.startingFrame !== undefined) {
      currentFrame = (currentFrame + this.startingFrame) % this.totalFrames;
    }

    return currentFrame;
  }
}
