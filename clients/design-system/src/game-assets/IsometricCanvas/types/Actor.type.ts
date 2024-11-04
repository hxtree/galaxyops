import { SpriteMapRegistry } from './SpriteMapRegistry.type';

export type Actor = {
  actorId: string;
  height?: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
  targetPosition?: {
    x: number;
    y: number;
    z: number;
  };
  spriteMapRegistry?: SpriteMapRegistry;
  animationState?: {
    currentAnimation: string;
    currentFrame?: number;
    animationDuration?: number;
    frameDuration?: number;
    isAnimating?: boolean;
    startTime?: string; // luxon date time
  };
  // TODO how to handle animation?
  // TODO how to handle object state?
};
