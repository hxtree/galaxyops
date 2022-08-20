/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */

import {
  FayeImago,
  GunterStonewell,
  LoomeeAngora,
  MalaceTsia,
  MeekuOni,
  PlayerCharacter,
  TraezUthsha,
} from '../archetype/PlayerCharacter';

export interface Summon {
  name: string;
  description: string;
  summoner: PlayerCharacter;
}

export class Vachel implements Summon {
  name: 'Vachel';
  description: 'A silver bull';
  backstory: 'A bull that Meeku raised as a child';
  summoner: MeekuOni;
  // Attacks – Must use Command to attack.
  // Charge
  // Can be used with Overdrive combinations
  // *Can be upgraded with CART to accommodate large Party.
}

export class Felix implements Summon {
  name: 'Felix';
  description: 'A white lop-eared dwarf rabbit';
  backstory: 'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.';
  summoner: LoomeeAngora;
}

export class Passant implements Summon {
  name: 'Passant';
  description: 'Beast with one front leg raided facing towards viewers left';
  backstory: 'A pet that Loomee adopts';
  summoner: FayeImago;
}

export class Rampant implements Summon {
  name: 'Rampant';
  description: 'Heraldry rearing on hind legs';
  backstory: '';
  summoner: FayeImago;
}

export class Lyre implements Summon {
  name: 'Lyre';
  description: 'A giant half Luna moth and lyrebird that Faye can summon at will';
  backstory: '';
  summoner: FayeImago;
}

export class Sandy implements Summon {
  name: 'Sandy';
  description: 'A box turtle';
  backstory: '';
  summoner: TraezUthsha;
}

export class Ouruborus implements Summon {
  name: 'Ouruborus';
  description: 'A demon that consumes itself';
  backstory: '';
  summoner: MalaceTsia;
}

export class Mischievous implements Summon {
  name: 'Mischievous';
  description: 'A black and white cat';
  backstory: '';
  summoner: MalaceTsia;
}

export class Scribbles implements Summon {
  name: 'Scribbles';
  description: 'A flying squirrel';
  backstory: '';
  summoner: GunterStonewell;
}
