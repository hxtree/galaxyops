import { Controller, Post, Body, Param, Query } from '@nestjs/common';
import { TemplateService } from './template.service';
import { UserAccountCreatedDto, UserForgottenPasswordResetDto } from './dtos';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import {
  UserForgottenPasswordResetTemplate,
  UserAccountCreatedTemplate,
  TemplateType,
} from './templates';
import { NotFoundException } from '@nestjs/common';
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
    const { html, text, template } = await this._templateService.convert(
      UserAccountCreatedTemplate,
      plainToInstance(UserAccountCreatedDto, body),
    );

    switch (format) {
      case FormatType.HTML:
        return await Promise.resolve({ data: html });
      case FormatType.TEXT:
        return await Promise.resolve({ data: text });
      case FormatType.TEMPLATE:
        return await Promise.resolve({ data: template });
      default:
        return await Promise.resolve({ html, text });
    }
  }

  @ApiBody({ type: [UserForgottenPasswordResetDto] })
  @ApiQuery({ name: 'format', enum: FormatType })
  @Post('user-forgotten-password-reset')
  async convertUserForgottenPasswordReset(
    @Body() body: any,
    @Query('format') format: FormatType,
  ): Promise<any> {
    const { html, text, template } = await this._templateService.convert(
      UserForgottenPasswordResetTemplate,
      plainToInstance(UserForgottenPasswordResetDto, body),
    );

    switch (format) {
      case FormatType.HTML:
        return await Promise.resolve({ data: html });
      case FormatType.TEXT:
        return await Promise.resolve({ data: text });
      case FormatType.TEMPLATE:
        return await Promise.resolve({ data: template });
      default:
        return await Promise.resolve({ html, text });
    }
  }
}
