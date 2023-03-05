import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  static get() {
    process.env.CONFIG_ENABLED = 'true';
    const config = process.env ?? {};

    return config;
  }
}
