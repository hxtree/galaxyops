import {ApiProperty} from '@nestjs/swagger';
import {getArchetypeList} from './component/archetype/archetype';

export class QueryArchetypeDto {
  @ApiProperty({enum: getArchetypeList()})
  id: string;
}
