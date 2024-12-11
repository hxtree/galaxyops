import { IsString, IsUrl, IsArray, ValidateNested } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Properties } from './Properties.dto';
import { Actor } from './Actor/Actor.dto';
import { Dialogue } from './Dialogue.dto';
import { Coordinate3d } from './Coordinate3d.dto';

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

  @Transform(({ value }) => {
    return Object.keys(value).reduce(
      (acc, key) => {
        acc[key] = value[key];
        return acc;
      },
      {} as Record<string, string>,
    );
  })
  @IsString({ each: true })
  @IsUrl({}, { each: true })
  spriteMapRegistry: Record<string, string>;

  // TODO add type for grid
  grid: string[][][];

  @ValidateNested()
  @Type(() => Coordinate3d)
  cameraPosition: Coordinate3d;
}
