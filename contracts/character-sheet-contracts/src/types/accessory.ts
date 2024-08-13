import { Slot } from './slot';
import { EffectTable } from './table.effect';
import { SupplyItem } from './supply-item';

export type Accessory = SupplyItem & {
  history?: string; // the history of an item must be discovered
  purpose?: string;
  gearSlots: Slot[];
  effects?: EffectTable;
  removable?: boolean; // whether player can remove via menus
};
