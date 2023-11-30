import { Module } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { PlayerAchievementController } from './player-achievements.controller';
import { PlayerAchievementRepository } from '../../models/player-achievement.repository';
import { databaseModule } from '../../database.module';
import { PlayerAchievementSchema } from '../../models/player-achievement.schema';

@Module({
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'PlayerAchievement', schema: PlayerAchievementSchema },
    ]),
  ],
  controllers: [PlayerAchievementController],
  providers: [PlayerAchievementRepository],
})
export class PlayerAchievementModule {}
