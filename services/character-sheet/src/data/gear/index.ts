import { Accessory } from './accessory.gear';
import { Outfit } from './outfit.gear';
import { Weapon } from './weapon.gear';
import { Equipment } from './equipment.gear';

export { Token } from './token.gear';
export { Equipment } from './equipment.gear';
export { Slot } from './slot';

/**
 * Objects termed as "Gear" are those that can be equipped.
 * Archetypes can only equip compatible gear.
 */
export const Gear = {
  ...Accessory,
  ...Outfit,
  ...Weapon,
};

export type GearType = Accessory.Type | Outfit.Type | Weapon.Type;
export type EquipmentType = typeof Equipment;
