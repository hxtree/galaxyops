import {Slot} from './slot';

/**
 * Outfit
 *
 * A collection of garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individuallly.
 */

export enum Outfit {
  TSHIRT_AND_JEANS = 'T-Shirt and Jeans',
  OFFICERS_UNIFORM = "Officer's Uniform",
}

export namespace Outfit {
  export type OutfitType = {
    name: string;
    description: string;
    gearSlots?: Slot[];
  };

  export const TShirtAndJeans: OutfitType = {
    name: Outfit.TSHIRT_AND_JEANS,
    description: 'White t-Shirt and denim jeans',
    gearSlots: [Slot.OUTFIT],
  };

  export const OfficersUniform: OutfitType = {
    name: Outfit.OFFICERS_UNIFORM,
    description: 'Black Embellished Tarry Coat',
    gearSlots: [Slot.OUTFIT],
  };
}
