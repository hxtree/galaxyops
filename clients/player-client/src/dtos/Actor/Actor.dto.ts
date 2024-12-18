import {
  IsEnum,
  IsString,
  IsNumber,
  Min,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DateTime } from 'luxon';
import { SpriteMapRecord } from '../SpriteMap/SpriteMapRecord.dto';
import { ActorOrientation } from './ActorOrientation.type';
import { ActorPosition } from './ActorPosition.dto';
import { SpriteMapActionId } from '../SpriteMap/SpriteMapType.type';
import { Action } from '../Actions/Action';
import { kebabCase } from 'lodash';
import { Coordinate2d } from '../Coordinate2d.dto';
import { GridFieldArea } from '../Grid/GridFieldArea.type';
import {
  SPRITE_HEIGHT,
  SPRITE_WIDTH,
} from '../../core/IsometricCanvas/utils/SpriteDimensions';
import { Coordinate3d } from '../Coordinate3d.dto';

export class Actor {
  @IsString()
  actorId: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  height?: number;

  @ValidateNested({ each: true })
  @Type(() => SpriteMapRecord)
  spriteMapRegistry?: SpriteMapRecord[];

  @IsEnum(SpriteMapActionId)
  spriteMapActionId: SpriteMapActionId;

  @IsNumber()
  spriteMapCurrentFrame: number;

  @ValidateNested()
  @Type(() => ActorPosition)
  position: ActorPosition;

  @IsEnum(ActorOrientation)
  orientation: ActorOrientation;

  @ValidateNested({ each: true })
  @Type(() => Action)
  actions: Action[];

  lastUpdated?: DateTime; // Timestamp for when the actor's data was last updated

  get currentAction(): Action {
    return this.actions[this.actions.length - 1];
  }

  get spriteMapId(): string {
    return kebabCase(
      `${this.actorId ?? 'unknown'}-${this.spriteMapActionId || 'idle'}`,
    );
  }

  gridRenderPosition(): Coordinate3d {
    let x = this.position.gridX;
    let y = this.position.gridY;
    if (this.position.subX > 0.5) {
      x++;
    }
    if (this.position.subY > 0.5) {
      y++;
    }
    return {
      x: x, //Math.ceil(this.position.x),
      y: y, //Math.ceil(this.position.y),
      z: this.position.z,
    };
  }

  screenPosition(vectors: GridFieldArea): Coordinate2d {
    const baseCoordinate2d: Coordinate2d = {
      x: vectors.right.x - (vectors.right.x - vectors.left.x),
      y: vectors.top.y - 17,
    };

    // if(this.position.subX < 0.5) {
    //   baseCoordinate2d.x -= this.position.subX * (SPRITE_WIDTH / 2);
    // }
    console.log(this.gridRenderPosition());
    console.log(this.position);

    if (this.position.subX >= 0.6) {
      baseCoordinate2d.x += this.position.subX * (SPRITE_WIDTH / 2);
      baseCoordinate2d.y += this.position.subX * (SPRITE_HEIGHT / 2);
    }

    // if(this.position.subX <= 0.4) {
    //   baseCoordinate2d.x -= this.position.subX * (SPRITE_WIDTH / 2);
    //   baseCoordinate2d.y -= this.position.subX * (SPRITE_HEIGHT /2);
    // }

    return baseCoordinate2d;
  }

  addAction(action: Action) {
    if (!this.actions) {
      this.actions = [];
    }
    this.actions.push(action);
  }

  async processActions() {
    if (!this.actions) {
      return;
    }

    const currentAction = this.currentAction;
    if (!currentAction) {
      return;
    }

    currentAction.actionRun(this);
    // if (currentAction.isComplete()) {
    this.actions.pop();
    // }
  }

  /**
   * Returns the current position of the actor where they should be rendered from
   */
  // get position() {
  //   // Determine if the target position is closer to the camera than the current position
  //   if (
  //     this.movement.targetPosition.x > this.movement.currentPosition.x ||
  //     this.movement.targetPosition.y > this.movement.currentPosition.y
  //   ) {
  //     return this.movement.targetPosition;
  //   }
  //   if (this.movement.targetPositionReached) {
  //     return this.movement.targetPosition;
  //   }
  //   return this.movement.currentPosition;
  // }

  // get animation(){
  //   get isInMotion() {
  //     if (!this.startTimestamp || !this.duration) {
  //       return false;
  //     }
  //     const now = DateTime.now();
  //     const endTimestamp = this.startTimestamp.plus(this.duration);
  //     if(now >= endTimestamp) {
  //       return false;
  //     }
  //     return true;
  //   }

  //   // const actorIndex = 0;
  //   // console.log(newData.actors[actorIndex]);
  //   // console.log('ss')
  //   // if(newData.actors[actorIndex].movement.isInMotion === false){
  //   //   newData.actors[actorIndex].animation.currentAnimation = 'idle';
  //   //   newData.actors[actorIndex].animation.totalFrames = 1;
  //   //   newData.actors[actorIndex].animation.currentPosition = newData.actors[actorIndex].animation.targetPosition;
  //   // }
  // }
}
