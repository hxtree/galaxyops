import {Accessories} from './accessories.gear';
import {Outfits} from './outfit.gear';
import {Weapons} from './weapon.gear';

export const Equipment = {
  ...Accessories,
  ...Outfits,
  ...Weapons,
};

export type Equipment = typeof Equipment;
