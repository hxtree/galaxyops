import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './module/health/health.module';
import { PlayerAchievementsModule } from './module/player-achievements/player-achievements.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    PlayerAchievementsModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
