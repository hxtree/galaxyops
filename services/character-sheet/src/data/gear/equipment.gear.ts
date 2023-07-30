import { Accessory } from './accessory.gear';
import { Outfit } from './outfit.gear';
import { Weapon } from './weapon.gear';

export const Equipment = {
  ...Accessory,
  ...Outfit,
  ...Weapon,
};

/**
 * contains list of all supported EquipmentIds
 */
export const EquipmentIds = Object.keys(Equipment);

/**
 * type for each supported EquipmentId
 */
export type EquipmentId = keyof typeof Equipment;
