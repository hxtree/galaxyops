import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

// eslint-disable max-len
export const databaseModule = (options: MongooseModuleOptions = {}) => MongooseModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    pass: configService.get('MONGO_DATABASE_PASSWORD'),
    uri: `${configService.get('MONGO_DATABASE_URI')}/${configService.get(
      'STAGE',
    )}-${configService.get('APP_NAME')}`,
    user: configService.get('MONGO_DATABASE_USER'),
    ...options,
  }),
});
