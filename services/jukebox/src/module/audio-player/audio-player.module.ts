import { Module } from '@nestjs/common';
import { AudioPlayerController } from './audio-player.controller';

@Module({
  controllers: [AudioPlayerController],
  providers: [],
  imports: [],
})
export class AudioPlayerModule {}
