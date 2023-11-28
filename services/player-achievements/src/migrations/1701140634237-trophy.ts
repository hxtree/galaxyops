import { asyncForEach } from '@cats-cradle/nestjs-modules';
import { getDb } from '../migrations-utils/db';
import { Achievements } from '../models/achievements';

export const up = async () => {
  const db = await getDb();

  await asyncForEach(Achievements, async (trophy) => {
    await db.collection('trophies').insertOne(trophy);
  });
};

export const down = async () => {
  const db = await getDb();

  await asyncForEach(Achievements, async (trophy) => {
    await db.collection('trophies').deleteOne(trophy);
  });
};
