import { Duration } from 'luxon';

export type Animation = {
  isAnimating?: boolean;
  startingFrame?: number;
  totalFrames: number;
  frameDuration: Duration;
  currentFrame?: number;
};

export type GridAnimations = {
  [key: string]: Animation;
};
