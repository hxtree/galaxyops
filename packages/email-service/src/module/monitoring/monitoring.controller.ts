import { Get, Controller, Post, Body, Param, Query } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { ApiBody, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { SendEmailRequestDto } from './send-email-request.dto';
import { TemplateType } from '../template/templates';
import { EmailRequestRepository } from './email-request.repository';
import { EmailRequest } from './email-request.schema';
import { StatusType } from './status.type';
import { v4 } from 'uuid';

@Controller('requests')
export class MonitoringController {
  constructor(
    private _monitoringService: MonitoringService,
    private _emailRequestRepository: EmailRequestRepository,
  ) {}

  @ApiBody({ type: [SendEmailRequestDto] })
  @ApiQuery({ name: 'template', enum: TemplateType })
  @Post('')
  async create(
    @Body() sendEmailRequestDto: SendEmailRequestDto,
    @Query('template') template: TemplateType,
  ): Promise<any> {
    const emailRequest = new EmailRequest();
    emailRequest.data = sendEmailRequestDto.data;
    emailRequest.template = template;
    emailRequest.status = sendEmailRequestDto.status ?? StatusType.OPEN;
    emailRequest.updatedAt = Date.now().toString();
    emailRequest.id = v4();

    return this._emailRequestRepository.create(emailRequest);
  }

  @Get('')
  async findAll(): Promise<any> {
    return await this._emailRequestRepository.findAll();
  }
}
