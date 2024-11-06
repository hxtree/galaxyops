import { Duration } from 'luxon';

export type Animation = {
  isAnimating?: boolean;
  currentFrame?: number;
  totalFrames: number;
  frameDuration: Duration;
};

export type GridAnimations = {
  [key: string]: Animation;
};
