import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '@cats-cradle/nestjs-modules';
import { TEmailMessageDocument, EmailMessage } from './email-message.schema';

@Injectable()
export class EmailMessageRepository extends Repository<TEmailMessageDocument> {
  constructor(
    @InjectModel(EmailMessage.name)
    private entity: Model<TEmailMessageDocument>,
  ) {
    super(entity);
  }
}
