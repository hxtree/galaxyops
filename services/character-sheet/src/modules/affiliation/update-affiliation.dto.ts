import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';
import { IsEnum, IsInt, IsPositive } from 'class-validator';
import { AffiliationId, AffiliationIds } from '../../data/affiliations';

export enum Operation {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export class UpdateAffiliationDto {
  @ApiProperty({
    default: v4(),
  })
    characterSheetId: string;

  @ApiProperty({ enum: AffiliationIds, default: 'THE_CATS' })
  @IsEnum(AffiliationIds)
    affiliationId: AffiliationId;

  @ApiProperty({ type: Number })
  @IsInt()
  @IsPositive()
    value: number;

  @ApiProperty({ enum: Operation, default: Operation.ADD })
  @IsEnum(Operation)
    operation: Operation;
}
