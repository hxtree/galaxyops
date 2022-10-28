import {ApiProperty} from '@nestjs/swagger';
import {ArchetypeList} from './component/archetype/archetype';

export class QueryArchetypeDto {
  @ApiProperty({enum: Object.keys(ArchetypeList)})
  id: string;
}
