import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './module/health/health.module';
import { PlayerAchievementModule } from './module/player-achievements/player-achievements.module';
import { AchievementModule } from './module/achievements/achievements.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    AchievementModule,
    PlayerAchievementModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
