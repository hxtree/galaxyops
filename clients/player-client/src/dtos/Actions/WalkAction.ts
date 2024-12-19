import { Duration } from 'luxon';
import { ActorOrientation } from '../Actor/ActorOrientation.type';
import { Actor } from '../Actor/Actor.dto';
import { Action } from './Action';
import { pause } from './pause';
import { SpriteMapActionId } from '../SpriteMap/SpriteMapType.type';
import { Coordinate2d } from '../Coordinate2d.dto';

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
      let delta: Coordinate2d = { x: 0, y: 0 };
      switch (this.direction) {
        case ActorOrientation.NORTHEAST:
          delta = { x: 0, y: -0.1 };
          break;
        case ActorOrientation.NORTHWEST:
          delta = { x: -0.1, y: 0 };
          break;
        case ActorOrientation.SOUTHEAST:
          delta = { x: 0.1, y: 0 };
          break;
        case ActorOrientation.SOUTHWEST:
          delta = { x: 0, y: 0.1 };
          break;
      }

      actor.spriteMapActionId = this.spriteMapId;
      actor.orientation = this.direction;
      const startCurrentFrame = actor.spriteMapCurrentFrame;

      for (let i = 0; i < 5; i++) {
        actor.position.move(delta);
        actor.spriteMapCurrentFrame = (startCurrentFrame + i) % this.frames;
        this.progress = ((i + 1) / 5) * 100;
        await pause(this.frameDuration());
      }

      actor.spriteMapCurrentFrame = 0;
      actor.spriteMapActionId = SpriteMapActionId.IDLE;

      resolve(true);
    };

    return new Promise(executeRun);
  }
}
