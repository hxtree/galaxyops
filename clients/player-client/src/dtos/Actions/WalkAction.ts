import { Duration } from 'luxon';
import { ActorOrientation } from '../Actor/ActorOrientation.type';
import { Actor } from '../Actor/Actor.dto';
import { Action } from './Action';
import { pause } from './pause';
import { SpriteMapActionId } from '../SpriteMap/SpriteMapType.type';
import { Coordinate2d } from '../Coordinate2d.dto';

export class WalkAction extends Action {
  direction: ActorOrientation;
  gridDelta: number;

  constructor(params: {
    wait: Duration;
    act: Duration;
    recovery: Duration;
    direction?: ActorOrientation;
    gridDelta?: number;
    framesPerAction: number;
    spriteMapFrames: number;
  }) {
    super(params);
    if (params.direction) {
      this.direction = params.direction;
    }

    this.framesPerAction = params.framesPerAction;
    this.spriteMapFrames = params.spriteMapFrames;

    this.gridDelta = params.gridDelta ?? 0.5;

    this.progress = 0;
    this.spriteMapId = SpriteMapActionId.WALK;
  }

  setDirection(direction: ActorOrientation) {
    this.direction = direction;
  }

  async actionRun(actor: Actor): Promise<boolean> {
    const executeRun = async (
      resolve: (value: boolean | PromiseLike<boolean>) => void,
    ) => {
      let frameDelta: Coordinate2d = { x: 0, y: 0 };
      const perFrameDelta = parseFloat(
        (this.gridDelta / this.framesPerAction).toFixed(2),
      );

      switch (this.direction) {
        case ActorOrientation.NORTHEAST:
          frameDelta = { x: 0, y: -perFrameDelta };
          break;
        case ActorOrientation.NORTHWEST:
          frameDelta = { x: -perFrameDelta, y: 0 };
          break;
        case ActorOrientation.SOUTHEAST:
          frameDelta = { x: perFrameDelta, y: 0 };
          break;
        case ActorOrientation.SOUTHWEST:
          frameDelta = { x: 0, y: perFrameDelta };
          break;
      }

      actor.orientation = this.direction;
      const startCurrentFrame = actor.spriteMapCurrentFrame;
      for (let i = 0; i <= this.framesPerAction; i++) {
        actor.position.move(frameDelta);
        actor.spriteMapActionId = this.spriteMapId;
        actor.spriteMapCurrentFrame =
          (startCurrentFrame + i) % this.spriteMapFrames;
        this.progress = (1 / this.framesPerAction) * i;
        await pause(this.frameDuration());
      }

      actor.actions.pop();
      resolve(true);
    };

    return new Promise(executeRun);
  }
}
