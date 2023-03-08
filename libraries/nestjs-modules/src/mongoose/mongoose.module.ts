/* eslint-disable implicit-arrow-linebreak */
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = await MongoMemoryServer.create({
        binary: {
          version: '4.2.8',
        },
      });

      const mongoUri = await mongod.getUri();
      return {
        uri: mongoUri,
        ...options,
      };
    },
  });

export const closeInMongodConnection = async () => {
  if (mongod) {
    await mongoose.disconnect();
    await mongod.stop();
  }
};

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
