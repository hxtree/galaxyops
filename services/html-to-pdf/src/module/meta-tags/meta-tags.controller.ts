import {
  Controller, Get, Param, Query, VERSION_NEUTRAL,
} from '@nestjs/common';
import { MetaTagsService } from './meta-tags.service';

@Controller({ path: 'meta-tags', version: ['1', VERSION_NEUTRAL] })
export class MetaTagsController {
  constructor(private readonly metaTagsService: MetaTagsService) {}

  @Get()
  async getMetaTags(
    @Query('url') url: string,
  ): Promise<{ [key: string]: string }> {
    return this.metaTagsService.getMetaTags(url);
  }
}
