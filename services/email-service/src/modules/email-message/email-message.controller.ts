import {
  Get,
  Controller,
  Post,
  Body,
  Query,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dto';
import {
  UserForgottenPasswordResetTemplate,
  UserAccountCreatedTemplate,
} from './templates';
import { ActionType } from '../../models/email-message/action.type';
import { EngineService } from './engine.service';
import { QueueService } from './queue.service';

@Controller({ path: 'email-message', version: ['1', VERSION_NEUTRAL] })
export class EmailMessageController {
  constructor(
    private _engineService: EngineService,
    private _queueService: QueueService,
  ) {}

  @ApiBody({ type: UserAccountCreatedDto })
  @ApiQuery({ name: 'action', enum: ActionType })
  @Post('user-account-created')
  async convert(
    @Body() data: UserAccountCreatedDto,
      @Query('action') action: ActionType,
  ): Promise<any> {
    const defaultData = {
      subject: 'Forgotten Password Reset',
      fromAddress: 'PUT_EMAIL_HERE@gmail.com',
    };

    return this._engineService.process(
      action,
      UserAccountCreatedDto.slug,
      UserAccountCreatedTemplate,
      { ...data, ...defaultData },
    );
  }

  @ApiBody({ type: UserForgottenPasswordResetDto })
  @ApiQuery({ name: 'action', enum: ActionType })
  @Post('user-forgotten-password-reset')
  async convertUserForgottenPasswordReset(
    @Body() data: UserForgottenPasswordResetDto,
      @Query('action') action: ActionType,
  ): Promise<any> {
    const defaultData = {
      subject: 'User Account Created',
      fromAddress: 'PUT_EMAIL_HERE@gmail.com',
    };

    return this._engineService.process(
      action,
      UserForgottenPasswordResetDto.slug,
      UserForgottenPasswordResetTemplate,
      { ...data, ...defaultData },
    );
  }

  @Get('stats')
  async stats(): Promise<any> {
    return this._queueService.findAll();
  }
}
