import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HealthModule } from './module/health/health.module';
import { WeatherModule } from './module/weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public'),
    }),
    HealthModule,
    WeatherModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
