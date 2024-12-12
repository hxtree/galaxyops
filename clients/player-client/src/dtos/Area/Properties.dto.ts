import { IsEnum, IsOptional } from 'class-validator';
import { BackgroundColor } from './BackgroundColor.type';

export class Properties {
  @IsOptional()
  @IsEnum(BackgroundColor)
  backgroundColor?: BackgroundColor;
}
