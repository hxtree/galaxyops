import { Get, Controller, Post, Body, Query } from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { PublishService } from './publish.service';
import { BaseMessage } from '../../topics/base-message';

@Controller('messages')
export class MessageController {
  constructor(private _publishService: PublishService) {}

  @ApiBody({ type: BaseMessage })
  @Post()
  async convert(@Body() data: BaseMessage): Promise<any> {
    return this._publishService.publish(data);
  }
}
