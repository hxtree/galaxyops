import { Module } from '@nestjs/common';
import { DiceRollModule } from './module/dice-roll/dice-roll.module';
import { HealthModule } from './module/health/health.module';

@Module({
  imports: [DiceRollModule, HealthModule],
  providers: [],
  exports: [],
})
export class AppModule {}
