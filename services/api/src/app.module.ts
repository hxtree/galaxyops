import { Module } from '@nestjs/common';
import { RouterModule } from './modules/router/router.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [RouterModule, HealthModule],
  providers: [],
  exports: [],
})
export class AppModule {}
