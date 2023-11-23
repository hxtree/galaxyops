import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '@cats-cradle/nestjs-modules';
import {
  TPlayerAchievementsDocument,
  PlayerAchievements,
} from './player-achievements.schema';

@Injectable()
export class PlayerAchievementsRepository extends Repository<TPlayerAchievementsDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(PlayerAchievements.name)
    private entity: Model<TPlayerAchievementsDocument>,
  ) {
    super(entity);
  }
}
