import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Properties } from './Area/Properties.dto';
import { Actor } from './Actor/Actor.dto';
import { Dialogue } from './Dialogue.dto';
import { Coordinate3d } from './Coordinate3d.dto';
import { GridAnimation } from './Grid/GridAnimation.dto';
import { SpriteMapRecord } from './SpriteMapRecord.dto';

export class GameState {
  @ValidateNested()
  @Type(() => Properties)
  properties: Properties;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Actor)
  actors: Actor[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dialogue)
  dialogues: Dialogue[];

  @ValidateNested({ each: true })
  @Type(() => SpriteMapRecord)
  spriteMapRegistry: SpriteMapRecord[];

  // TODO add type for grid
  grid: string[][][];

  @ValidateNested()
  @Type(() => Coordinate3d)
  cameraPosition: Coordinate3d;

  @ValidateNested({ each: true })
  @Type(() => GridAnimation)
  gridAnimations?: GridAnimation[];
}
