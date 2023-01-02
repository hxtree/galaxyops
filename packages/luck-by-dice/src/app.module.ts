import { Module } from '@nestjs/common';
import { RollModule } from './module/roll/roll.module';

@Module({
  imports: [RollModule],
  providers: [],
  exports: [],
})
export class AppModule {}
