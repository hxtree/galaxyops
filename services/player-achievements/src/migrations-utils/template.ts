import { asyncForEach } from '@cats-cradle/nestjs-modules';
import { getDb } from './db';

const items = [{ a: 'b' }];

export const up = async () => {
  const db = await getDb();

  await asyncForEach(items, async (item: any) => {
    db.collection('item').insertOne(item);
  });
};

export const down = async () => {
  const db = await getDb();

  await asyncForEach(items, async (item: any) => {
    db.collection('item').deleteOne(item);
  });
};
