import { ApiProperty } from '@nestjs/swagger';
import { ItemId, ItemIds } from '../../data';

export class QueryItemDto {
  @ApiProperty({ enum: ItemIds })
    id: ItemId;
}
