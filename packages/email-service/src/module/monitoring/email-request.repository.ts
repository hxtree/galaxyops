import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '@cats-cradle/nestjs-modules';
import { TEmailRequestDocument, EmailRequest } from './email-request.schema';

@Injectable()
export class EmailRequestRepository extends Repository<TEmailRequestDocument> {
  constructor(
    @InjectModel(EmailRequest.name)
    private entity: Model<TEmailRequestDocument>,
  ) {
    super(entity);
  }
}
