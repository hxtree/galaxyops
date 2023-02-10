import { Module } from '@nestjs/common';
import { DiceRollModule } from './module/dice-roll/dice-roll.module';

@Module({
  imports: [DiceRollModule],
  providers: [],
  exports: [],
})
export class AppModule {}
