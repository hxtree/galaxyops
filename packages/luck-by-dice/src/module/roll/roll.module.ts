import {Module} from '@nestjs/common';
import {RollService} from './roll.service';
import {RollController} from './roll.controller';

@Module({
  controllers: [RollController],
  providers: [RollService],
})
export class RollModule {}
