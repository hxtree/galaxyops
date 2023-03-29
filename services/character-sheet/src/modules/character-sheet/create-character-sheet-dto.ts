import { ApiProperty } from '@nestjs/swagger';
import { Archetype } from '../../data/archetype/archetype';
import { ArchetypeType } from '../../data/archetype';

export class CreateCharacterSheetDto {
  @ApiProperty()
  public id?: string;

  @ApiProperty({ enum: Object.keys(Archetype) })
  public archetypeId!: string;

  @ApiProperty()
  public name?: string;

  @ApiProperty()
  public surname?: string;
}
