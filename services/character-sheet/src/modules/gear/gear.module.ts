import { Module } from '@nestjs/common';
import { GearService } from './gear.service';
import { GearController } from './gear.controller';

@Module({
  controllers: [GearController],
  providers: [GearService],
})
export class GearModule {}
