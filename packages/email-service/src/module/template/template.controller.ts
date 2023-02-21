import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { TemplateService } from './template.service';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dtos';
import { plainToInstance } from 'class-transformer';
import {
  UserForgottenPasswordResetTemplate,
  UserAccountCreatedTemplate,
} from './templates';

@Controller('/templates')
export class TemplateController {
  _templateService;

  // DI not working, probably due to esbuildtemplate
  constructor() {
    this._templateService = new TemplateService();
  }

  @Post('user-forgotten-password-reset')
  getUserForgottenPasswordReset(
    @Body() body: UserForgottenPasswordResetDto,
  ): Promise<any> {
    return this._templateService.convert(
      UserForgottenPasswordResetTemplate,
      plainToInstance(UserForgottenPasswordResetDto, body),
    );
  }

  @Post('user-account-created')
  getUserAccountCreated(@Body() body: UserAccountCreatedDto): Promise<any> {
    return this._templateService.convert(
      UserAccountCreatedTemplate,
      plainToInstance(UserAccountCreatedDto, body),
    );
  }
}
