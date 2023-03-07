import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  static get(field?: string): any {
    const config = {
      CONFIG_ENABLED: 'true',

      // junk free sandbox account whitelisted by ip
      MONGO_DATABASE_URI:
        'mongodb+srv://cluster0.axqeoec.mongodb.net/myFirstDatabase',
      MONGO_DATABASE_USER: 'test-user',
      MONGO_DATABASE_PASSWORD: 'ilaGev0g5cpwCOzf',
    };

    if (!field) {
      return config;
    }

    const property = field as keyof typeof config;

    return config[property];
  }
}
