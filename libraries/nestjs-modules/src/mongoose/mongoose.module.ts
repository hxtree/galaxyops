/* eslint-disable implicit-arrow-linebreak */
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: process.env.MONGO_DATABASE_URI ?? '',
      ...options,
    }),
  });

export const closeInMongodConnection = async () => {};

export const rootMongooseModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      uri: `${configService.get('MONGO_DATABASE_URI')}/${configService.get(
        'STAGE',
      )}-${configService.get('APP_NAME')}`,
      user: configService.get('MONGO_DATABASE_USER'),
      pass: configService.get('MONGO_DATABASE_PASSWORD'),
      ...options,
    }),
  });
