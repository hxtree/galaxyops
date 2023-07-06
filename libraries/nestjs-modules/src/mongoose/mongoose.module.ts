/* eslint-disable implicit-arrow-linebreak */
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { MongoMemoryServer } from 'mongodb-memory-server-global';
import mongoose from 'mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = async (
  options: MongooseModuleOptions = {},
) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      if (process.env.MONGO_DATABASE_URI) {
        return {
          uri: process.env.MONGO_DATABASE_URI,
          ...options,
        };
      }

      mongod = await MongoMemoryServer.create();
      const mongoUri = await mongod.getUri();
      return {
        uri: mongoUri,
        ...options,
      };
    },
  });

export const closeInMongodConnection = async () => {
  await mongoose.disconnect();
  if (mongod) await mongod.stop();
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
