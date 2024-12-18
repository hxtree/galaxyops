import { IsNumber } from 'class-validator';

export class Coordinate2d {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}
