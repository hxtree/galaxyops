import { Module } from '@nestjs/common';
import { MongooseModule } from '@galaxyops/nestjs-modules';
import { AchievementController } from './achievements.controller';
import { databaseModule } from '../../database.module';
import { AchievementSchema } from '../../models/achievement.schema';
import { AchievementRepository } from '../../models/achievement.repository';

@Module({
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'Achievement', schema: AchievementSchema },
    ]),
  ],
  controllers: [AchievementController],
  providers: [AchievementRepository],
})
export class AchievementModule {}
