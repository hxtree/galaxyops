import { Module } from '@nestjs/common';
import { RouterService } from './router.service';
import { RouterController } from './router.controller';

@Module({
  controllers: [RouterController],
  providers: [RouterService],
})
export class RouterModule {}
