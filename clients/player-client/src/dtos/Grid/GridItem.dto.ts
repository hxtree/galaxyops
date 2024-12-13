import { IsNumber, IsString } from 'class-validator';

export class GridField {
  @IsString()
  spriteMapId?: string;

  @IsNumber()
  spriteId?: number;

  @IsString()
  animationId?: string;

  @IsString()
  collisionId?: string;
}
