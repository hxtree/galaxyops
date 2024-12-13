import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { CollisionType } from './CollisionType.type';
import { CollisionExemption } from './CollisionExemption.type';

export class Collision {
  @IsString()
  id: string;

  @IsEnum(CollisionType)
  type: CollisionType;

  @IsEnum(CollisionExemption)
  exemption?: CollisionExemption;

  @IsString()
  soundEffect?: string;

  @IsBoolean()
  defaultCollision?: boolean;

  @Transform(
    ({ value }) => ({
      NE: value.NE ?? true,
      NW: value.NW ?? true,
      SW: value.SW ?? true,
      SE: value.SE ?? true,
    }),
    { toClassOnly: true },
  )
  @Transform(({ value }) => value, { toPlainOnly: true })
  collisionDirections: {
    NE: boolean;
    NW: boolean;
    SW: boolean;
    SE: boolean;
  };
}
