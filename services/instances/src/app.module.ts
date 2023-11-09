import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './module/health/health.module';
import { InstanceModule } from './module/instances/instance.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    InstanceModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
