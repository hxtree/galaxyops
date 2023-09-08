import { ApiProperty } from '@nestjs/swagger';
import { ItemId, ItemIds } from '../../data/item';

export class QueryItemDto {
  @ApiProperty({ enum: ItemIds })
    id: ItemId;
}
