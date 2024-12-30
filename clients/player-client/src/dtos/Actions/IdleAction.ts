import { Duration } from 'luxon';
import { Actor } from '../Actor/Actor.dto';
import { Action } from './Action';
import { pause } from './pause';
import { SpriteMapActionId } from '../SpriteMap/SpriteMapType.type';

export class IdleAction extends Action {
  constructor(params: {
    wait: Duration;
    act: Duration;
    recovery: Duration;
    frames: number;
  }) {
    super(params);
    this.framesPerAction = params.frames;

    this.progress = 0;
    this.spriteMapId = SpriteMapActionId.IDLE;
  }

  async actionRun(actor: Actor): Promise<boolean> {
    const executeRun = async (
      resolve: (value: boolean | PromiseLike<boolean>) => void,
    ) => {
      actor.spriteMapActionId = this.spriteMapId;
      actor.spriteMapCurrentFrame = 0;

      await pause(this.frameDuration());
      this.progress = 1;

      resolve(true);
    };

    return new Promise(executeRun);
  }
}
