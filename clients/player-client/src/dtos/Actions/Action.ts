import { Duration } from 'luxon';
import { Actor } from '../Actor/Actor.dto';
import { SpriteMapActionId } from '../SpriteMap/SpriteMapType.type';

export abstract class Action {
  waitDuration: Duration;
  actDuration: Duration;
  recoveryDuration: Duration;

  public spriteMapId: SpriteMapActionId;
  public progress: number;

  public framesPerAction: number;
  public spriteMapFrames: number;

  constructor(params: { wait?: Duration; act: Duration; recovery?: Duration }) {
    this.waitDuration = params.wait ?? Duration.fromObject({ seconds: 0 });
    this.actDuration = params.act ?? Duration.fromObject({ seconds: 0 });
    this.recoveryDuration =
      params.recovery ?? Duration.fromObject({ seconds: 0 });
  }

  isComplete(): boolean {
    return this.progress === 100;
  }

  frameDuration(): Duration {
    const duration = this.actDuration;
    const divisor = this.framesPerAction;
    const milliseconds = duration.as('milliseconds');
    const dividedMilliseconds = milliseconds / divisor;
    return Duration.fromMillis(dividedMilliseconds);
  }

  abstract actionRun(actor: Actor, targets?: Actor[]): Promise<boolean>;
}
