import {GearSlot} from './Gear';
import {
  MeekuOni,
  MalaceTsia,
  PlayerCharacter,
} from '../archetype/PlayerCharacter';

/**
 * Outfit
 *
 * A collection of garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individuallly.
 */

export type Outfits = Array<Outfit>;

export interface Outfit {
  name: string;
  description: string;
  gearSlots?: Array<GearSlot>;
}

export class TShirtAndJeans implements Outfit {
  name: 'T-Shirt and Jeans';
  description: 'White t-Shirt and denim jeans';
  gearSlots: [GearSlot.OUTFIT];
}

export class OfficersUniform implements Outfit {
  name: "Officer's Uniform";
  description: 'Black Embellished Tarry Coat';
  gearSlots: [GearSlot.OUTFIT];
}
