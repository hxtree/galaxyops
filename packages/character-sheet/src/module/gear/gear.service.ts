import { Injectable } from '@nestjs/common';
import { Gear } from '../../data/gear';

@Injectable()
export class GearService {
  async find(id: string): Promise<any> {
    try {
      type GearKey = typeof Gear;
      type GearType = keyof GearKey;

      const gearId: GearType = id as GearType;
      return await Promise.resolve({ id, ...Gear[gearId] });
    } catch (err) {
      return Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async list(): Promise<any> {
    try {
      const gears: string[] = [];

      gears.push(...Object.keys(Gear));
      gears.sort();

      return await Promise.resolve(gears);
    } catch (err) {
      return Promise.reject(new Error('Failed to get Gears'));
    }
  }
}
