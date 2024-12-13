import { Duration } from 'luxon';
import { GridAnimation } from '../../../dtos/Grid/GridAnimation.dto';
import { ActorAnimation } from '../../../dtos/Actor/ActorAnimation.dto';

/**
 * Calculate how many frames have passed based on the elapsed time and frame duration.
 */
export function getFrame(animation: ActorAnimation | GridAnimation): number {
  const currentTime = performance.now();
  const elapsedTime = Duration.fromMillis(currentTime);
  const currentFrame =
    Math.floor(
      elapsedTime.as('seconds') / animation.frameDuration.as('seconds'),
    ) % animation.totalFrames;

  return currentFrame;
}
