import { Item } from '@galaxyops/character-sheet-contracts';
import { CraftingMaterials } from './crafting-materials.item';
import { Food } from './food.item';
import { SpecialItems } from './special.item';

export const Items = {
  ...CraftingMaterials,
  ...Food,
  ...SpecialItems,
};

export const ItemIds = Object.keys(Items);

export type ItemId = keyof typeof Items;

export type ItemType = Item & { id: ItemId };