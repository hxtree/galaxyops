import { IsNumber } from 'class-validator';

export class Coordinate3d {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  z: number;
}
