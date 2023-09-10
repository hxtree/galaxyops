import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum, IsOptional, IsString, IsUUID,
} from 'class-validator';
import { v4 } from 'uuid';
import { ArchetypeId, ArchetypeIds } from '../../data/archetype';

export class CreateCharacterSheetDto {
  @ApiProperty({
    default: v4(),
  })
  @IsUUID()
  @IsOptional()
  public _id?: string;

  @ApiProperty({
    default: v4(),
  })
  @IsUUID()
  public instanceId!: string;

  @ApiProperty({ enum: ArchetypeIds, default: 'DARUMA_NAKAMURA' })
  @IsEnum(ArchetypeIds)
  public archetypeId!: ArchetypeId;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'Daruma',
  })
  public name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'Nakamura',
  })
  public surname?: string;
}
