import {
  Accessory,
  Weapon,
  Outfit,
} from '@galaxyops/character-sheet-contracts';
import { Accessories } from './accessory.gear';
import { Outfits } from './outfit.gear';
import { Weapons } from './weapon.gear';
import { Equipment } from './equipment.gear';

export { Equipment } from './equipment.gear';

/**
 * Objects termed as "Gear" are those that can be equipped.
 * Archetypes can only equip compatible gear.
 */
export const Gear = {
  ...Accessories,
  ...Outfits,
  ...Weapons,
};

export type GearType = Accessory | Outfit | Weapon;
export type EquipmentType = typeof Equipment;
