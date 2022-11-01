export {Token} from './token.gear';
export {Equipment} from './equipment.gear';
export {Slot} from './slot';

import {Accessory} from './accessory.gear';
import {Item} from './item.gear';
import {Outfit} from './outfit.gear';
import {Weapon} from './weapon.gear';

export const Gear = {
  ...Accessory,
  ...Item,
  ...Outfit,
  ...Weapon,
};

export type GearType = Accessory.Type | Item.Type | Outfit.Type | Weapon.Type;
