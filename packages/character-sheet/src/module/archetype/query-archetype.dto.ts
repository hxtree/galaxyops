import {ApiProperty} from '@nestjs/swagger';
import {Archetype} from '../../value-object/archetype/archetype';

export class QueryArchetypeDto {
  @ApiProperty({enum: Object.keys(Archetype)})
  id: string;
}
