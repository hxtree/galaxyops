import { MongoClient, MongoClientOptions, Db } from 'mongodb';
import dotenv from 'dotenv';

export const getDb = async (): Promise<Db> => {
  dotenv.config();

  const options: MongoClientOptions = {
    auth: {
      username: process.env.MONGO_DATABASE_USER,
      password: process.env.MONGO_DATABASE_PASSWORD,
    },
  };

  const MONGO_URL = `${process.env.MONGO_DATABASE_URI}/`
    + `${process.env.STAGE}-${process.env.APP_NAME}`;
  console.log(MONGO_URL);

  const client: MongoClient = await MongoClient.connect(MONGO_URL, options);
  const db = client.db();

  return db;
};
