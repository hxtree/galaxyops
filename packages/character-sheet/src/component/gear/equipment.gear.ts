import {Accessory} from './accessories.gear';
import {Outfit} from './outfit.gear';
import {Weapon} from './weapon.gear';

export const Equipment = {
  ...Accessory,
  ...Outfit,
  ...Weapon,
};

export type Equipment = typeof Equipment;
