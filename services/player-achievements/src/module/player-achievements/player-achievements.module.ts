import { Module } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { PlayerAchievementController } from './player-achievements.controller';
import { PlayerAchievementRepository } from '../../models/player-achievement.repository';
import { databaseModule } from '../../database.module';
import { PlayerAchievementSchema } from '../../models/player-achievement.schema';
import { AchievementSchema } from '../../models/achievement.schema';
import { AchievementRepository } from '../../models/achievement.repository';

@Module({
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'PlayerAchievement', schema: PlayerAchievementSchema },
      { name: 'Achievement', schema: AchievementSchema },
    ]),
  ],
  controllers: [PlayerAchievementController],
  providers: [PlayerAchievementRepository, AchievementRepository],
})
export class PlayerAchievementModule {}
