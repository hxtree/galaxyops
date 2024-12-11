import { IsEnum, IsOptional } from 'class-validator';
import { BackgroundColor } from '../core/IsometricCanvas/types/BackgroundColor.type';

export class Properties {
  @IsOptional()
  @IsEnum(BackgroundColor)
  backgroundColor?: BackgroundColor;
}
