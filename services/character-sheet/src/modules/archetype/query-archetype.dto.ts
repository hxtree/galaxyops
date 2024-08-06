import { ApiProperty } from '@nestjs/swagger';
import { ArchetypeId, ArchetypeIds } from '../../data/archetypes';

export class QueryArchetypeDto {
  @ApiProperty({ enum: ArchetypeIds })
    id: ArchetypeId;
}
