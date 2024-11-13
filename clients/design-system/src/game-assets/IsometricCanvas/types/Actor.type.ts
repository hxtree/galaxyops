import { SpriteMapRegistry } from './SpriteMapRegistry.type';
import { Movement } from './Movement.type';
import { DateTime } from 'luxon';
import { Animation } from './Animation.type';

// Main Actor data structure
export type Actor = {
  actorId: string; // Unique ID for the actor
  height?: number; // Optional height of the actor (for collision, etc.)
  spriteMapRegistry?: SpriteMapRegistry; // Optional sprite map for animations
  currentState: ActorState; // Current state of the actor (e.g., idle, moving)

  movement: Movement; // Movement data for the actor
  animation: Animation; // Animation data for the actor

  lastUpdated?: DateTime; // Timestamp for when the actor's data was last updated
};

// import { SpriteMapRegistry } from './SpriteMapRegistry.type';

// export type Actor = {
//   actorId: string;
//   height?: number;
//   position: {
//     x: number;
//     y: number;
//     z: number;
//   };
//   targetPosition?: {
//     x: number;
//     y: number;
//     z: number;
//   };
//   spriteMapRegistry?: SpriteMapRegistry;
//   animationState?: {
//     currentAnimation: string;
//     startingFrame?: number;
//     animationDuration?: number;
//     frameDuration?: number;
//     isAnimating?: boolean;
//     startTime?: string; // luxon date time
//   };
//   // TODO how to handle animation?
//   // TODO how to handle object state?
// };
