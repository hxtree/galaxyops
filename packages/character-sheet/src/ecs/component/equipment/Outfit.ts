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

export interface Outfit {
  name: string;
  description: string;
  gearSlots: Array<GearSlot>;
  character: PlayerCharacter;
}

export class MeekuOniCausal {
  name: 'Casual';
  description: 'White t-Shirt and denim jeans';
  gearSlots: [GearSlot.OUTFIT];
  character: MeekuOni;
}

export class MalaceTsiaUniform {
  name: "Officer's Uniform";
  description: 'Black Embellished Tarry Coat';
  gearSlots: [GearSlot.OUTFIT];
  character: MalaceTsia;
}
