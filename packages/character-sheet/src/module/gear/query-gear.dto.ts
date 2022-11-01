import {ApiProperty} from '@nestjs/swagger';
import {Gear} from '../../value-object/gear';

export class QueryGearDto {
  @ApiProperty({enum: Object.keys(Gear)})
  id: string;
}
