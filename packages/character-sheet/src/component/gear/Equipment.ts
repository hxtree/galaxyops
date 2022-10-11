import {Accessories} from './Accessories';
import {Outfits} from './Outfit';
import {Weapons} from './Weapon';

export const Equipment = {
  ...Accessories,
  ...Outfits,
  ...Weapons,
};

export type Equipment = typeof Equipment;
