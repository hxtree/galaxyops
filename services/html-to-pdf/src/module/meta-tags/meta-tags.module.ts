import { Module } from '@nestjs/common';
import { MetaTagsController } from './meta-tags.controller';
import { MetaTagsService } from './meta-tags.service';

@Module({
  controllers: [MetaTagsController],
  providers: [MetaTagsService],
})
export class MetaTagsModule {}
