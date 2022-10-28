import {Injectable} from '@nestjs/common';
import * as Gear from './component/gear';

@Injectable()
export class GearService {
  async find(id: string): Promise<any> {
    try {
      const gear = (id: string) => {
        type GearKey = typeof Gear.AccessoryList;
        type GearType = keyof GearKey;

        const gearId: GearType = id as GearType;
        const gear = Gear.AccessoryList[gearId];
        return gear;
      };

      const result = {id: id, ...gear(id)};

      return await Promise.resolve(result);
    } catch (err) {
      Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async list(): Promise<any> {
    try {
      const gears: string[] = [];

      gears.push(...Object.keys(Gear.Accessory));
      gears.push(...Object.keys(Gear.Equipment));
      gears.push(...Object.keys(Gear.Item));
      gears.push(...Object.keys(Gear.Outfit));
      gears.push(...Object.keys(Gear.Weapon));
      gears.sort();

      return await Promise.resolve(gears);
    } catch (err) {
      Promise.reject(new Error('Failed to get Gears'));
    }
  }
}
