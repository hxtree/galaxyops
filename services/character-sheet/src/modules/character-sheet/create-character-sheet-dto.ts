import { ApiProperty } from '@nestjs/swagger';
import { ArchetypeId, ArchetypeIds } from '../../data/archetype';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCharacterSheetDto {
  @ApiProperty()
  @IsUUID()
  @IsOptional()
  public _id?: string;

  @ApiProperty()
  @IsUUID()
  public instanceId!: string;

  @ApiProperty({ enum: ArchetypeIds })
  @IsEnum(ArchetypeIds)
  public archetypeId!: ArchetypeId;

  @IsString()
  @IsOptional()
  @ApiProperty()
  public name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  public surname?: string;
}
