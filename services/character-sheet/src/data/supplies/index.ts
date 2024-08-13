import { Item } from '@galaxyops/character-sheet-contracts';
import { CraftingMaterials } from './crafting-materials.item';
import { Food } from './food.item';
import { SpecialItems } from './special.item';
import { VendorTrash } from './vendor-trash.item';
import { Accessories } from './accessories.gear';
import { Outfits } from './outfit.gear';
import { Weapons } from './weapon.gear';
import { MaskGear } from './masks.gear';
import { ArmorGear } from './armor.gear';

export const Items = {
  ...CraftingMaterials,
  ...Food,
  ...VendorTrash,
  ...SpecialItems,
};

export const ItemIds = Object.keys(Items);

export type ItemId = keyof typeof Items;

export type ItemType = Item & { id: ItemId };

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
