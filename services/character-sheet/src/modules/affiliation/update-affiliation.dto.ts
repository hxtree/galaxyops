import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';
import { IsEnum, IsInt, IsPositive } from '@galaxyops/validation-schemas';
import { AffiliationId, AffiliationIds } from '../../data';

export enum Operation {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export class UpdateAffiliationDto {
  @ApiProperty({
    default: v4(),
  })
    characterSheetId: string;

  @ApiProperty({ default: 'THE_CATS', enum: AffiliationIds })
  @IsEnum(AffiliationIds)
    affiliationId: AffiliationId;

  @ApiProperty({ type: Number })
  @IsInt()
  @IsPositive()
    value: number;

  @ApiProperty({ default: Operation.ADD, enum: Operation })
  @IsEnum(Operation)
    operation: Operation;
}
