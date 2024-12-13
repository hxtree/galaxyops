import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Properties } from './Area/Properties.dto';
import { Actor } from './Actor/Actor.dto';
import { Dialogue } from './Dialogue.dto';
import { Coordinate3d } from './Coordinate3d.dto';
import { GridAnimation } from './Grid/GridAnimation.dto';
import { SpriteMapRecord } from './SpriteMapRecord.dto';
import { GridField } from './Grid/GridItem.dto';
import { Collision } from './Collisions/Collision.dto';

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpriteMapRecord)
  spriteMapRegistry: SpriteMapRecord[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GridField)
  grid: GridField[][][];

  @ValidateNested()
  @Type(() => Coordinate3d)
  cameraPosition: Coordinate3d;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Collision)
  collisions?: Collision[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GridAnimation)
  gridAnimations?: GridAnimation[];
}
