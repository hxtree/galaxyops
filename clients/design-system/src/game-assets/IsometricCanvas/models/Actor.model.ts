/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateTime, Duration } from 'luxon';
import { ActorState } from '../types/ActorState.type';
import { Animation } from '../types/Animation.type';
import { Movement } from '../types/Movement.type';
import { SpriteMapRegistry } from '../types/SpriteMapRegistry.type';

export class ActorModel {
  actorId: string;
  height?: number;
  spriteMapRegistry?: SpriteMapRegistry;
  currentState: ActorState;
  movement: Movement;
  animation: Animation;
  lastUpdated?: DateTime;

  get position() {
    const now = DateTime.now();
    if (this.movement.endTimestamp && now > this.movement.endTimestamp) {
      return this.movement.targetPosition;
    }
    return this.movement.currentPosition;
  }

  get isInMotion() {
    const now = DateTime.now();
    if (this.movement.endTimestamp && now > this.movement.endTimestamp) {
      return false;
    }
    return true;
  }

  get targetPositionReached() {
    const now = DateTime.now();
    if (this.endTimestamp && now > this.endTimestamp) {
      return true;
    }
    return false;
  }

  get endTimestamp() {
    if (!this.movement.movementDuration) {
      return null;
    }
    return this.movement.startTimestamp.plus(this.movement.movementDuration);
  }

  constructor(props: Partial<ActorModel>) {
    this.actorId = props.actorId ?? 'UNKNOWN';
    this.height = props.height;
    this.spriteMapRegistry = props.spriteMapRegistry ?? {};
    this.currentState = props.currentState ?? ActorState.IDLE;
    this.animation = props.animation ?? {
      currentAnimation: 'idle',
    };

    if (props.movement) {
      const startTimestamp = DateTime.fromISO(
        props.movement.startTimestamp as unknown as string,
      );
      const movementDuration = Duration.fromObject(
        props.movement.movementDuration as unknown as Duration,
      );
      const endTimestamp = startTimestamp.plus(movementDuration);

      this.movement = {
        targetPosition: props.movement?.targetPosition,
        currentPosition: props.movement?.currentPosition,
        movementDuration: movementDuration,
        startTimestamp: startTimestamp,
        endTimestamp: endTimestamp,
      };
    }
  }

  static fromObject(obj: any): ActorModel {
    try {
      return new this(obj);
    } catch (err) {
      const error = err as unknown as Error;
      console.error('Error parsing JSON:', error.message);
      throw err;
    }
  }

  static fromJson(json: string): ActorModel {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }
}
