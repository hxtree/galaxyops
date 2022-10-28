import {ApiProperty} from '@nestjs/swagger';
import * as Gear from './component/gear';

export class QueryGearDto {
  @ApiProperty({enum: Object.keys(Gear.Accessory)})
  id: string;
}
