import { mongoMigrateCli } from 'mongo-migrate-ts';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.MONGO_DATABASE_USER;
const password = process.env.MONGO_DATABASE_PASSWORD;
const MONGO_URI = `${process.env.MONGO_DATABASE_URI}`;

const db = `${process.env.STAGE}-${process.env.APP_NAME}`;
const uri = MONGO_URI.replace('//', `//${username}:${password}@`);

mongoMigrateCli({
  uri,
  database: db,
  migrationsDir: __dirname,
  migrationsCollection: 'migration_versions',
});
