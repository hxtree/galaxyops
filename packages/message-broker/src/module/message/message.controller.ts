import { Get, Controller, Post, Body, Query } from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { PublishService } from './publish.service';

@Controller('messages')
export class MessageController {
  constructor(private _publishService: PublishService) {}

  // @ApiBody({ type: UserAccountCreatedDto })
  // @ApiQuery({ name: 'action', enum: ActionType })
  @Post()
  async convert(
    @Body() data: any, // UserAccountCreatedDto,
  ): Promise<any> {
    return this._publishService.publish(data);
  }
}
