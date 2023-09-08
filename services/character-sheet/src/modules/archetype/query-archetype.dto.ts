import { ApiProperty } from '@nestjs/swagger';
import { Archetype, ArchetypeId, ArchetypeIds } from '../../data/archetype';

export class QueryArchetypeDto {
  @ApiProperty({ enum: ArchetypeIds })
    id: ArchetypeId;
}
