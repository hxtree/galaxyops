/* eslint-disable implicit-arrow-linebreak */
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { ConfigService } from '../config/config.service';

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
  if (mongod) await mongod.stop();
};

export const rootMongooseModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: ConfigService.get('MONGO_DATABASE_URI'),
      user: ConfigService.get('MONGO_DATABASE_USER'),
      pass: ConfigService.get('MONGO_DATABASE_PASSWORD'),
      ...options,
    }),
  });
