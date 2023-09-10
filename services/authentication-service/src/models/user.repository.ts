import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '@cats-cradle/nestjs-modules';
import { TUserDocument, User } from './user.schema';

@Injectable()
export class UserRepository extends Repository<TUserDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(User.name)
    private entity: Model<TUserDocument>,
  ) {
    super(entity);
  }
}
