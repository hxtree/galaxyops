import { Duration, DateTime } from 'luxon';

// Animation data for tracking current animation state and completion
export type Animation = {
  isAnimating?: boolean;
  currentAnimation?: string; // Name of the current animation (e.g., "walk", "run")
  startingFrame?: number;
  totalFrames: number;
  frameDuration: Duration;
  currentFrame?: number;
  animationDuration?: number; // Duration of the animation (in seconds)
  startTimestamp?: DateTime; // Time when the animation started
  endTimestamp?: DateTime; // Time when the animation should end
};

export type GridAnimations = {
  [key: string]: Animation;
};
