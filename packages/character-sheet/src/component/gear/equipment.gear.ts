import {Accessories} from './accessories.gear';
import {Outfit} from './outfit.gear';
import {Weapons} from './weapon.gear';

export const Equipment = {
  ...Accessories,
  ...Outfit,
  ...Weapons,
};

export type Equipment = typeof Equipment;
