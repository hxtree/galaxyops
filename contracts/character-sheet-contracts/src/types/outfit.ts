import { EffectRecord } from './table.effect';
import { SupplyItem } from './supply-item';

export type Outfit = SupplyItem & {
  effect?: EffectRecord[];
};
