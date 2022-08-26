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
  PennyKibbutz,
  PlayerCharacter,
  TraezUthsha,
} from '../archetype/PlayerCharacter';

export interface Summon {
  name: string;
  description: string;
  summoner: PlayerCharacter;
  commands?: Array<string>; // must be invoked by summoner through Command
}

export class Vachel implements Summon {
  name: 'Vachel';
  description: 'A silver bull';
  backstory: 'A bull that Meeku raised as a child';
  summoner: MeekuOni;
  commands: [
    'Charge',
    'Graze', // eat grass
    'Pull Cart', // *Can be upgraded with CART to accommodate large Party.
    // Can be used with Overdrive combinations
  ];
}

export class Felix implements Summon {
  name: 'Felix';
  description: 'A white lop-eared dwarf rabbit';
  backstory: 'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.';
  summoner: LoomeeAngora;
}

export class HeraldicLion implements Summon {
  name: 'Heraldic Lion';
  description: 'A regal lion with an impecable stance';
  summoner: PennyKibbutz;
  commands: [
    // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
    'Passant Stance', // claw
    'Rampant Stance', // multiple hasty attacks that reduce defense
    'Issuant Stance', // focus
    'Guardant Stance', // guard
  ];
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
