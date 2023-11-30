import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '@cats-cradle/nestjs-modules';
import { TAchievementDocument, Achievement } from './achievement.schema';

@Injectable()
export class AchievementRepository extends Repository<TAchievementDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(Achievement.name)
    private entity: Model<TAchievementDocument>,
  ) {
    super(entity);
  }
}
