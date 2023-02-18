import { ApiProperty } from '@nestjs/swagger';
import { Archetype } from '../../data/archetype/archetype';
import { ArchetypeType } from '../../data/archetype';

export class CreateCharacterSheetDto {
  @ApiProperty()
  public id?: string;

  @ApiProperty()
  public firstName!: string;

  @ApiProperty()
  public lastName!: string;

  @ApiProperty({ enum: Object.keys(Archetype) })
  public archetypeId!: string;
}
