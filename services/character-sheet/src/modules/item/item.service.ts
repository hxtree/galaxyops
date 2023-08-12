import { Injectable } from '@nestjs/common';
import { Item, ItemIds, ItemType, ItemId } from '../../data/item';

@Injectable()
export class ItemService {
  async find(id: ItemId): Promise<ItemType> {
    try {
      return await Promise.resolve({ id, ...Item[id] });
    } catch (err) {
      return Promise.reject(new Error('Failed find item'));
    }
  }

  async list(): Promise<ItemId[]> {
    try {
      const items: ItemId[] = [];

      items.push(...ItemIds);
      items.sort();

      return await Promise.resolve(items);
    } catch (err) {
      return Promise.reject(new Error('Failed to get Items'));
    }
  }
}
