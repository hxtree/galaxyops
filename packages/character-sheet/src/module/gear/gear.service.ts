import {Injectable} from '@nestjs/common';
import {Gear} from '../../value-object/gear';

@Injectable()
export class GearService {
  async find(id: string): Promise<any> {
    try {
      const gear = (id: string) => {
        type GearKey = typeof Gear;
        type GearType = keyof GearKey;

        const gearId: GearType = id as GearType;
        const gear = Gear[gearId];
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

      gears.push(...Object.keys(Gear));
      gears.sort();

      return await Promise.resolve(gears);
    } catch (err) {
      Promise.reject(new Error('Failed to get Gears'));
    }
  }
}
