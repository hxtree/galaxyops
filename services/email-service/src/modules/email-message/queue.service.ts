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
    const emailRequest = new EmailMessage({
      _id: v4(),
      data: JSON.stringify(data),
      template,
      status: StatusType.OPEN,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    });

    return this._emailMessageRepository.create(emailRequest);
  }

  public async addCompleted(template: string, data: any): Promise<any> {
    const emailRequest = new EmailMessage({
      _id: v4(),
      data: JSON.stringify(data),
      template,
      status: StatusType.COMPLETED,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    });

    return this._emailMessageRepository.create(emailRequest);
  }

  public async findAll(): Promise<TEmailMessageDocument[]> {
    return this._emailMessageRepository.findAll();
  }
}
