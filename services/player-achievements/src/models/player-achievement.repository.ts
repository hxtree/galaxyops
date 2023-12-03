import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@cats-cradle/nestjs-modules';
import {
  TPlayerAchievementDocument,
  PlayerAchievement,
} from './player-achievement.schema';

@Injectable()
export class PlayerAchievementRepository extends BaseRepository<TPlayerAchievementDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(PlayerAchievement.name)
    private entity: Model<TPlayerAchievementDocument>,
  ) {
    super(entity);
  }
}
