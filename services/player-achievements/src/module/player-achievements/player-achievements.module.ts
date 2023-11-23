import { Module } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { PlayerAchievementsController } from './player-achievements.controller';
import { PlayerAchievementsRepository } from '../../models/player-achievements.repository';
import { databaseModule } from '../../database.module';
import { PlayerAchievementsSchema } from '../../models/player-achievements.schema';

@Module({
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'PlayerAchievements', schema: PlayerAchievementsSchema },
    ]),
  ],
  controllers: [PlayerAchievementsController],
  providers: [PlayerAchievementsRepository],
})
export class PlayerAchievementsModule {}
