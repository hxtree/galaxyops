import { Accessory } from './accessory.gear';
import { Outfit } from './outfit.gear';
import { Weapon } from './weapon.gear';

export const Equipment = {
  ...Accessory,
  ...Outfit,
  ...Weapon,
};

export type EquipmentType = typeof Equipment;
