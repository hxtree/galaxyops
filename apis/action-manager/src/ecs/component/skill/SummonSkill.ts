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

/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export enum SummonSkillList {
  'VACHEL' = 'Vachel',
  'FELIX' = 'Felix',
  'HERALDIC_LION' = 'Heraldic Lion',
  'LYRE' = 'Lyre',
  'SANDY' = 'Sandy',
  'OURUBORUS' = 'Ouruborus',
  'MISCHIEVOUS' = 'Mischievous',
  'SCRIBBLES' = 'Scribbles',
  // Malace's tattoos reference lesser key of solomon?
}

export interface Summon {
  name: SummonSkillList;
  description: string;
  summoner: PlayerCharacter;
  commands?: Array<string>; // must be invoked by summoner through Command
}

export class Vachel implements Summon {
  name: SummonSkillList.VACHEL;
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
  name: SummonSkillList.FELIX;
  description: 'A white lop-eared dwarf rabbit';
  backstory: 'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.';
  summoner: LoomeeAngora;
}

export class HeraldicLion implements Summon {
  name: SummonSkillList.HERALDIC_LION;
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
  name: SummonSkillList.LYRE;
  description: 'A giant half Luna moth and lyrebird that Faye can summon at will';
  backstory: '';
  summoner: FayeImago;
}

export class Sandy implements Summon {
  name: SummonSkillList.SANDY;
  description: 'A box turtle';
  backstory: '';
  summoner: TraezUthsha;
}

export class Ouruborus implements Summon {
  name: SummonSkillList.OURUBORUS;
  description: 'A demon that consumes itself';
  backstory: '';
  summoner: MalaceTsia;
}

export class Mischievous implements Summon {
  name: SummonSkillList.MISCHIEVOUS;
  description: 'A black and white cat';
  backstory: 'The Keeper of Law';
  summoner: MalaceTsia;
}

export class Scribbles implements Summon {
  name: SummonSkillList.SCRIBBLES;
  description: 'A flying squirrel';
  backstory: '';
  summoner: GunterStonewell;
}
