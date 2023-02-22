import { Injectable } from '@nestjs/common';
import { SendEmailRequestDto } from './send-email-request.dto';

@Injectable()
export class MonitoringService {
  public create(request: SendEmailRequestDto) {}

  public findAll() {}
}
