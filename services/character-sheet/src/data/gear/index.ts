import { Accessories } from './accessories.gear';
import { Outfits } from './outfit.gear';
import { Weapons } from './weapon.gear';
import { MaskGear } from './masks.gear';
import { ArmorGear } from './armor.gear';

/**
 * Objects termed as "Gear" are those that can be equipped.
 * Archetypes can only equip compatible gear.
 */
export const Gear = {
  ...MaskGear,
  ...Accessories,
  ...ArmorGear,
  ...Outfits,
  ...Weapons,
};

/**
 * contains list of all supported GearIds
 */
export const GearIds = Object.keys(Gear);

/**
 * type for each supported GearId
 */
export type GearId = keyof typeof Gear;
