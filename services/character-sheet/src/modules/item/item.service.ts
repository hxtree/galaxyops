import { Injectable } from '@nestjs/common';
import {
  Items, ItemIds, ItemType, ItemId,
} from '../../data';

@Injectable()
export class ItemService {
  async find(id: ItemId): Promise<ItemType> {
    try {
      return await Promise.resolve({ id, ...Items[id] });
    } catch (err) {
      return Promise.reject(new Error('Failed find item'));
    }
  }

  async list(): Promise<ItemId[]> {
    try {
      const items: ItemId[] = [];

      items.push(...(ItemIds as ItemId[]));
      items.sort();

      return await Promise.resolve(items);
    } catch (err) {
      return Promise.reject(new Error('Failed to get Items'));
    }
  }
}
