import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AudioPlayerModule } from './module/audio-player/audio-player.module';
import { HealthModule } from './module/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    AudioPlayerModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
