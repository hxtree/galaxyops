import { Slot, Outfit } from '@galaxyops/character-sheet-contracts';

/**
 * Outfit
 *
 * One or more garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individually.
 */
export namespace Outfits {
  export const TSHIRT_AND_JEANS: Outfit = {
    description: 'White t-Shirt and denim jeans',
    gearSlots: [Slot.OUTFIT],
    name: 'T-Shirt and Jeans',
  };

  export const SWIMSUIT: Outfit = {
    description: 'Designed for swimming',
    gearSlots: [Slot.OUTFIT],
    name: 'Swimsuit',
    // bonus to swimming?
  };

  export const OFFICERS_UNIFORM: Outfit = {
    description: 'Black Embellished Tarry Coat',
    gearSlots: [Slot.OUTFIT],
    name: "Officer's Uniform",
  };

  export const KIMONO: Outfit = {
    description:
      'A wrapped-front garment with square sleeves and a rectangular body.',
    gearSlots: [Slot.OUTFIT],
    name: 'Kimono',
  };
}
