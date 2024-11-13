import { SpriteMapRegistry } from './SpriteMapRegistry.type';
import { Movement } from './Movement.type';
import { DateTime } from 'luxon';
import { Animation } from './Animation.type';
import { ActorState } from './ActorState.type';

export type Actor = {
  actorId: string;
  height?: number; // Optional height of the actor (for collision, etc.)
  spriteMapRegistry?: SpriteMapRegistry;
  currentState: ActorState; // Current state of the actor (e.g., idle, moving)
  movement: Movement; // Movement data for the actor
  animation: Animation; // Animation data for the actor
  lastUpdated?: DateTime; // Timestamp for when the actor's data was last updated
};
