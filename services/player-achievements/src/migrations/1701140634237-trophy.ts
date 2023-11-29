import { asyncForEach } from '@cats-cradle/nestjs-modules';
import { ObjectId, UUID } from 'bson';
import { v4 } from 'uuid';
import { getDb } from '../migrations-utils/db';
import { Achievements } from '../models/achievements';

export const up = async () => {
  const db = await getDb();

  await asyncForEach(Achievements, async (trophy: object) => {
    const record = { _id: new UUID(v4()) as any as ObjectId };

    await db.collection('trophies').insertOne({ ...record, ...trophy });
  });
};

export const down = async () => {
  const db = await getDb();

  await asyncForEach(Achievements, async (trophy) => {
    await db.collection('trophies').deleteOne(trophy);
  });
};
