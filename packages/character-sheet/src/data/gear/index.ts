import { Accessory } from './accessory.gear';
import { Item } from './item.gear';
import { Outfit } from './outfit.gear';
import { Weapon } from './weapon.gear';
import { Equipment } from './equipment.gear';

export { Token } from './token.gear';
export { Equipment } from './equipment.gear';
export { Slot } from './slot';

export const Gear = {
  ...Accessory,
  ...Item,
  ...Outfit,
  ...Weapon,
};

export type GearType = Accessory.Type | Item.Type | Outfit.Type | Weapon.Type;
export type EquipmentType = typeof Equipment;
