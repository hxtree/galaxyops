import { Injectable } from '@nestjs/common';
import { Item, ItemType, ItemId } from '../../data/item';

@Injectable()
export class ItemService {
  async find(id: ItemId): Promise<ItemType> {
    try {
      return await Promise.resolve({ id, ...Item[id] });
    } catch (err) {
      return Promise.reject(new Error('Failed find item'));
    }
  }

  async list(): Promise<any> {
    try {
      const items: string[] = [];

      items.push(...Object.keys(Item));
      items.sort();

      return await Promise.resolve(items);
    } catch (err) {
      return Promise.reject(new Error('Failed to get Items'));
    }
  }
}
