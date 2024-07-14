import { Accessories } from './accessory.gear';
import { Outfits } from './outfit.gear';
import { Weapons } from './weapon.gear';

export const Equipment = {
  ...Accessories,
  ...Outfits,
  ...Weapons,
};

/**
 * contains list of all supported EquipmentIds
 */
export const EquipmentIds = Object.keys(Equipment);

/**
 * type for each supported EquipmentId
 */
export type EquipmentId = keyof typeof Equipment;
