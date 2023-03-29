import { Controller } from '@nestjs/common';

@Controller({ path: 'audio-player', version: ['1'] })
export class AudioPlayerController {
  async convert(): Promise<any> {
    // TODO
    return '';
  }
}
