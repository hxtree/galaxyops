import { Module } from '@nestjs/common';
import { DiceRollModule } from './modules/dice-roll/dice-roll.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [DiceRollModule, HealthModule],
  providers: [],
  exports: [],
})
export class AppModule {}
