import { Get, Controller, Post, Body, Param, Query } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { ApiBody, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { SendEmailRequestDto } from './send-email-request.dto';
import { TemplateType } from '../template/templates';

@Controller('requests')
export class MonitoringController {
  _monitoringService;

  // DI not working, probably due to esbuild
  constructor() {
    this._monitoringService = new MonitoringService();
  }

  @ApiBody({ type: [SendEmailRequestDto] })
  @ApiQuery({ name: 'template', enum: TemplateType })
  @Post('')
  async create(@Body() body: any): Promise<any> {
    return await this._monitoringService.create(body);
  }

  @Get('')
  async findAll(): Promise<any> {
    return await this._monitoringService.findAll();
  }
}
