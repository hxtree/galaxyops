import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';
import { asyncForEach } from '@cats-cradle/nestjs-modules';
import { ObjectId, UUID } from 'bson';
import { v4 } from 'uuid';
import { Achievements } from './1701265134891_SeedData';

export class Migration1701265134891 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await asyncForEach(Achievements, async (achievement: object) => {
      const record = { _id: new UUID(v4()) as any as ObjectId };

      await db
        .collection('achievements')
        .insertOne({ ...record, ...achievement });
    });
  }

  public async down(db: Db): Promise<any> {
    await asyncForEach(Achievements, async (achievement) => {
      await db.collection('achievements').deleteOne(achievement);
    });
  }
}
