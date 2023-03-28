import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import {
  EmailMessage,
  TEmailMessageDocument,
} from '../../models/email-message/email-message.schema';
import { StatusType } from '../../models/email-message/status.type';
import { EmailMessageRepository } from './email-message.repository';

@Injectable()
export class QueueService {
  constructor(private _emailMessageRepository: EmailMessageRepository) {}

  public async addOpen(template: string, data: any): Promise<any> {
    const emailRequest = new EmailMessage();
    emailRequest.id = v4();
    emailRequest.data = JSON.stringify(data);
    emailRequest.template = template;
    emailRequest.status = StatusType.OPEN;
    emailRequest.updatedAt = Date.now().toString();

    return this._emailMessageRepository.create(emailRequest);
  }

  public async addCompleted(template: string, data: any): Promise<any> {
    const emailRequest = new EmailMessage();
    emailRequest.id = v4();
    emailRequest.data = JSON.stringify(data);
    emailRequest.template = template;
    emailRequest.status = StatusType.COMPLETED;
    emailRequest.updatedAt = Date.now().toString();

    return this._emailMessageRepository.create(emailRequest);
  }

  public async findAll(): Promise<TEmailMessageDocument[]> {
    return this._emailMessageRepository.findAll();
  }
}
