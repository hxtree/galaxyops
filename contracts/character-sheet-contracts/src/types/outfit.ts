import { Slot } from './slot';
import { EffectRecord } from './table.effect';

export type Outfit = {
  name: string;
  description: string;
  gearSlots?: Slot[];
  effect?: EffectRecord[];
};
