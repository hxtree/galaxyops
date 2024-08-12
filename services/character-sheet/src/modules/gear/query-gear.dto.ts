import { ApiProperty } from '@nestjs/swagger';
import { Gear } from '../../data';

export class QueryGearDto {
  @ApiProperty({ enum: Object.keys(Gear) })
    id: string;
}
