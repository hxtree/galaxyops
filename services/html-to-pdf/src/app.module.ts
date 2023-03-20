import { Module } from '@nestjs/common';
import { HealthModule } from './module/health/health.module';

@Module({
  imports: [HealthModule],
  providers: [],
  exports: [],
})
export class AppModule {}
