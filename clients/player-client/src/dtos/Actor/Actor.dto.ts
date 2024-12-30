import {
  IsEnum,
  IsString,
  IsNumber,
  Min,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DateTime, Duration } from 'luxon';
import { SpriteMapRecord } from '../SpriteMap/SpriteMapRecord.dto';
import { ActorOrientation } from './ActorOrientation.type';
import { ActorPosition } from './ActorPosition.dto';
import { SpriteMapActionId } from '../SpriteMap/SpriteMapType.type';
import { Action } from '../Actions/Action';
import { kebabCase } from 'lodash';
import { Coordinate2d } from '../Coordinate2d.dto';
import { GridFieldArea } from '../Grid/GridFieldArea.type';
import {
  SPRITE_DEPTH,
  SPRITE_WIDTH,
} from '../../core/IsometricCanvas/utils/SpriteDimensions';
import { Coordinate3d } from '../Coordinate3d.dto';
import { IdleAction } from '../Actions/IdleAction';

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
    if (this.actions.length === 0) {
      return new IdleAction({
        wait: Duration.fromObject({ seconds: 0 }),
        act: Duration.fromObject({ seconds: 0.1 }),
        recovery: Duration.fromObject({ seconds: 0 }),
        frames: 1,
      });
    }

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
      x: Math.floor(x), //Math.ceil(this.position.x),
      y: Math.floor(y), //Math.ceil(this.position.y),
      z: Math.floor(this.position.z),
    };
  }

  screenPosition(vectors: GridFieldArea): Coordinate2d {
    const baseCoordinate2d: Coordinate2d = {
      x: vectors.right.x - (vectors.right.x - vectors.left.x),
      y: vectors.top.y - 17,
    };

    const subdivisions = 10;
    const spriteWidthPerSubdivision = SPRITE_WIDTH / (2 * subdivisions);
    const spriteDepthPerSubdivision = SPRITE_DEPTH / subdivisions;
    const hypotenuse = Math.sqrt(
      Math.pow(spriteWidthPerSubdivision, 2) +
        Math.pow(spriteDepthPerSubdivision, 2),
    );

    // Adjust subX to compensate for the grid rendering offset
    const adjustedSubX =
      this.position.subX > 0.5 ? this.position.subX - 1 : this.position.subX;
    const angle = Math.atan2(
      spriteDepthPerSubdivision,
      spriteWidthPerSubdivision,
    );
    const distance = hypotenuse * subdivisions * (0.5 - adjustedSubX);
    const offsetX = Math.round(distance * Math.cos(angle));
    const offsetY = distance * Math.sin(angle);

    baseCoordinate2d.x -= offsetX;
    baseCoordinate2d.y -= offsetY;

    // Adjust subY to compensate for the grid rendering offset (mirrored)
    const adjustedSubY =
      this.position.subY > 0.5 ? this.position.subY - 1 : this.position.subY;
    const angleY = Math.atan2(
      spriteWidthPerSubdivision,
      spriteDepthPerSubdivision,
    );
    const distanceY = hypotenuse * subdivisions * (0.5 - adjustedSubY);
    const offsetYMirrored = Math.round(distanceY * Math.cos(angleY));
    const offsetXMirrored = distanceY * Math.sin(angleY);

    baseCoordinate2d.x += offsetXMirrored;
    baseCoordinate2d.y -= offsetYMirrored;

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

    if (currentAction.isComplete()) {
      return;
    }

    await currentAction.actionRun(this);
  }
}
