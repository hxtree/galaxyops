import { Injectable } from '@nestjs/common';
import { EmailMessage } from './email-message.schema';
import { v4 } from 'uuid';
import { StatusType } from './types/status.type';
import { EmailMessageRepository } from './email-message.repository';

@Injectable()
export class QueueService {
  constructor(private _emailMessageRepository: EmailMessageRepository) {}

  public async create(template: string, data: any): Promise<any> {
    const emailRequest = new EmailMessage();
    emailRequest.id = v4();
    emailRequest.data = JSON.stringify(data);
    emailRequest.template = template;
    emailRequest.status = StatusType.OPEN;
    emailRequest.updatedAt = Date.now().toString();

    return this._emailMessageRepository.create(emailRequest);
  }

  public async findAll(): Promise<any> {
    return this._emailMessageRepository.findAll();
  }
}
