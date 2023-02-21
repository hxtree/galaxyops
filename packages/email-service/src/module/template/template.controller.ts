import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { TemplateService } from './template.service';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dtos';
import { plainToInstance } from 'class-transformer';
import {
  UserForgottenPasswordResetTemplate,
  UserAccountCreatedTemplate,
} from './templates';
import { FormatType } from './format.type';
import { ApiBody, ApiProperty, ApiQuery } from '@nestjs/swagger';

@Controller('templates')
export class TemplateController {
  _templateService;

  // DI not working, probably due to esbuildtemplate
  constructor() {
    this._templateService = new TemplateService();
  }

  @ApiBody({ type: [UserAccountCreatedDto] })
  @ApiQuery({ name: 'format', enum: FormatType })
  @Post('user-account-created')
  async convert(
    @Body() body: any,
    @Query('format') format: FormatType,
  ): Promise<any> {
    return await this._templateService.convertToFormat(
      UserAccountCreatedTemplate,
      plainToInstance(UserAccountCreatedDto, body),
      format,
    );
  }

  @ApiBody({ type: [UserForgottenPasswordResetDto] })
  @ApiQuery({ name: 'format', enum: FormatType })
  @Post('user-forgotten-password-reset')
  async convertUserForgottenPasswordReset(
    @Body() body: any,
    @Query('format') format: FormatType,
  ): Promise<any> {
    return await this._templateService.convertToFormat(
      UserForgottenPasswordResetTemplate,
      plainToInstance(UserForgottenPasswordResetDto, body),
      format,
    );
  }
}
