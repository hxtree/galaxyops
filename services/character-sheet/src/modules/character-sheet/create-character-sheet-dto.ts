import { ApiProperty } from '@nestjs/swagger';
import { ArchetypeId, ArchetypeIds } from '../../data/archetype';

export class CreateCharacterSheetDto {
  @ApiProperty()
  public id?: string;

  @ApiProperty({ enum: ArchetypeIds })
  public archetypeId!: ArchetypeId;

  @ApiProperty()
  public name?: string;

  @ApiProperty()
  public surname?: string;
}
