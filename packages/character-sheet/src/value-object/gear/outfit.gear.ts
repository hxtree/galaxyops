import {Slot} from './slot';

/**
 * Outfit
 *
 * A collection of garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individuallly.
 */
export namespace Outfit {
  export type Type = {
    name: string;
    description: string;
    gearSlots?: Slot[];
  };

  export const TSHIRT_AND_JEANS: Type = {
    name: 'T-Shirt and Jeans',
    description: 'White t-Shirt and denim jeans',
    gearSlots: [Slot.OUTFIT],
  };

  export const OFFICERS_UNIFORM: Type = {
    name: "Officer's Uniform",
    description: 'Black Embellished Tarry Coat',
    gearSlots: [Slot.OUTFIT],
  };
}
