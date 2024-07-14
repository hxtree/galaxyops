import { Slot } from './slot';

export type Outfit = {
  name: string;
  description: string;
  gearSlots?: Slot[];
};
