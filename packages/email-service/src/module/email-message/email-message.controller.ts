import {
  UsePipes,
  Get,
  Controller,
  Post,
  Body,
  ValidationPipe,
  Param,
  Query,
} from '@nestjs/common';
import { TemplateService } from './template.service';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dto';
import { plainToInstance } from 'class-transformer';
import {
  UserForgottenPasswordResetTemplate,
  UserAccountCreatedTemplate,
} from './templates';
import { FormatType } from './types/format.type';
import { ApiBody, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { QueueService } from './queue.service';

// POST /email-message/:template?format=html
// POST /email-message/:template?send=false&format=html,text
@Controller('email-message')
export class EmailMessageController {
  constructor(
    private _templateService: TemplateService,
    private _queueService: QueueService,
  ) {}

  @ApiBody({ type: [UserAccountCreatedDto] })
  @ApiQuery({ name: 'send', required: false, type: Boolean })
  @ApiQuery({ name: 'format', enum: FormatType })
  @UsePipes(ValidationPipe)
  @Post('user-account-created')
  async convert(
    @Body() body: UserAccountCreatedDto,
    @Query('format') format: FormatType,
  ): Promise<any> {
    this._queueService.create('user-account-created', body);

    return await this._templateService.convertToFormat(
      UserAccountCreatedTemplate,
      body,
      format,
    );
  }

  @ApiBody({ type: [UserForgottenPasswordResetDto] })
  @ApiQuery({ name: 'format', enum: FormatType })
  @UsePipes(ValidationPipe)
  @Post('user-forgotten-password-reset')
  async convertUserForgottenPasswordReset(
    @Body() body: UserForgottenPasswordResetDto,
    @Query('format') format?: FormatType,
  ): Promise<any> {
    this._queueService.create('user-forgotten-password-reset', body);

    return await this._templateService.convertToFormat(
      UserForgottenPasswordResetTemplate,
      body,
      format ?? FormatType.HTML,
    );
  }

  @Get('stats')
  async stats(): Promise<any> {
    return this._queueService.findAll();
  }
}
