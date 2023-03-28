import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '@cats-cradle/nestjs-modules';
import {
  TEmailMessageDocument,
  EmailMessage,
} from '../../models/email-message/email-message.schema';

@Injectable()
export class EmailMessageRepository extends Repository<TEmailMessageDocument> {
  constructor(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    @InjectModel(EmailMessage.name)
    private entity: Model<TEmailMessageDocument>,
  ) {
    super(entity);
  }
}
