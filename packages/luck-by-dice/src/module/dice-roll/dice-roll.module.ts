import { Module } from '@nestjs/common';
import { DiceRollService } from './dice-roll.service';
import { DiceRollController } from './dice-roll.controller';

@Module({
  controllers: [DiceRollController],
  providers: [DiceRollService],
})
export class DiceRollModule {}
