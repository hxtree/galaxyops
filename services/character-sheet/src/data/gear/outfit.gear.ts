import { Slot } from '@galaxyops/character-sheet-contracts';

/**
 * Outfit
 *
 * One or more garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individually.
 */
export namespace Outfit {
  export type Type = {
    name: string;
    description: string;
    gearSlots?: Slot[];
  };

  export const TSHIRT_AND_JEANS: Type = {
    description: 'White t-Shirt and denim jeans',
    gearSlots: [Slot.OUTFIT],
    name: 'T-Shirt and Jeans',
  };

  export const SWIMSUIT: Type = {
    description: 'Designed for swimming',
    gearSlots: [Slot.OUTFIT],
    name: 'Swimsuit',
    // bonus to swimming?
  };

  export const OFFICERS_UNIFORM: Type = {
    description: 'Black Embellished Tarry Coat',
    gearSlots: [Slot.OUTFIT],
    name: "Officer's Uniform",
  };

  export const KIMONO: Type = {
    description:
      'A wrapped-front garment with square sleeves and a rectangular body.',
    gearSlots: [Slot.OUTFIT],
    name: 'Kimono',
  };
}
