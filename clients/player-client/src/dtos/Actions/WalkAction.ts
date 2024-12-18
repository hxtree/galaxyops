import { Duration } from 'luxon';
import { ActorOrientation } from '../Actor/ActorOrientation.type';
import { Actor } from '../Actor/Actor.dto';
import { Action } from './Action';
import { pause } from './pause';
import { SpriteMapActionId } from '../SpriteMap/SpriteMapType.type';

export class WalkAction extends Action {
  direction: ActorOrientation;

  constructor(params: {
    wait: Duration;
    act: Duration;
    recovery: Duration;
    direction: ActorOrientation;
    frames: number;
  }) {
    super(params);
    this.direction = params.direction;
    this.frames = params.frames;

    this.progress = 0;
    this.spriteMapId = SpriteMapActionId.WALK;
  }

  async actionRun(actor: Actor): Promise<boolean> {
    const executeRun = async (
      resolve: (value: boolean | PromiseLike<boolean>) => void,
    ) => {
      this.progress = 0;
      let delta: { x?: number; y?: number } = {};

      switch (this.direction) {
        case ActorOrientation.NORTHEAST:
          delta = { y: -0.1 };
          break;
        case ActorOrientation.NORTHWEST:
          delta = { x: -0.1 };
          break;
        case ActorOrientation.SOUTHEAST:
          delta = { x: 0.1 };
          break;
        case ActorOrientation.SOUTHWEST:
          delta = { y: 0.1 };
          break;
      }

      actor.spriteMapActionId = this.spriteMapId;
      actor.orientation = this.direction;

      for (let currentFrame = 0; currentFrame < this.frames; currentFrame++) {
        actor.position.move(delta);
        actor.spriteMapCurrentFrame = currentFrame;
        this.progress = ((currentFrame + 1) / this.frames) * 100;
        await pause(this.frameDuration());
      }

      actor.spriteMapCurrentFrame = 0;
      actor.spriteMapActionId = SpriteMapActionId.IDLE;

      resolve(true);
    };

    return new Promise(executeRun);
  }
}
