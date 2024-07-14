import { ApiProperty } from '@nestjs/swagger';
import { ArchetypeId, ArchetypeIds } from '../../data/archetype';

export class QueryArchetypeDto {
  @ApiProperty({ enum: ArchetypeIds })
    id: ArchetypeId;
}
