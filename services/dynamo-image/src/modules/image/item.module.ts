import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
