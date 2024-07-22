import { ApiProperty } from '@nestjs/swagger';
import {
  IsDiceNotation,
  IsNumber,
  IsOptional,
} from '@galaxyops/validation-schemas';
import { Max, Min } from 'class-validator';

export class QueryRollDto {
  @IsDiceNotation()
  @ApiProperty({
    description: 'Dice notation',
    default: '1d6',
    type: String,
  })
  public notation: string;

  @IsNumber()
  @ApiProperty({
    description: 'Characters luck',
    type: Number,
  })
  public luck: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @ApiProperty({
    description: 'Amount of times to roll',
    minimum: 1,
    maximum: 100,
    default: 1,
    type: Number,
  })
  public iterations?: number;
}
