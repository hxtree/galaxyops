import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';
import { asyncForEach } from '@cats-cradle/nestjs-modules';
import { ObjectId, UUID } from 'bson';
import { v4 } from 'uuid';
import { Achievements } from '../src/models/achievements';

export class Migration1701265134891 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await asyncForEach(Achievements, async (trophy: object) => {
      const record = { _id: new UUID(v4()) as any as ObjectId };

      await db.collection('trophies').insertOne({ ...record, ...trophy });
    });
  }

  public async down(db: Db): Promise<any> {
    await asyncForEach(Achievements, async (trophy) => {
      await db.collection('trophies').deleteOne(trophy);
    });
  }
}
