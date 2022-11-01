import {ApiProperty} from '@nestjs/swagger';
import {Archetype} from '../../data/archetype/archetype';

export class QueryArchetypeDto {
  @ApiProperty({enum: Object.keys(Archetype)})
  id: string;
}
