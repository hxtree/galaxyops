/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export enum Summon {
  // todo flesh out how these work with individual summons, seens like theyed be individually based
  SUMMON = 'SUMMON',
  DISMISS = 'Dismiss',
  COMMAND = 'Command',

  VACHEL = 'Vachel',
  FELIX = 'Felix',
  HERALDIC_LION = 'Heraldic Lion',
  LYRE = 'Lyre',
  SANDY = 'Sandy',
  OURUBORUS = 'Ouruborus',
  MISCHIEVOUS = 'Mischievous',
  SCRIBBLES = 'Scribbles',
  // Malace's tattoos reference lesser key of solomon?
}

export namespace Summon {
  export type SummonType = {
    name: Summon;
    description: string;
    backstory?: string;
    commands?: string[]; // must be invoked by summoner through Command
  };

  export const Vachel: SummonType = {
    name: Summon.VACHEL,
    description: 'A silver bull',
    backstory: 'A bull that Meeku raised as a child',
    commands: [
      'Charge',
      'Graze', // eat grass
      'Pull Cart', // *Can be upgraded with CART to accommodate large Party.
      // Can be used with Overdrive combinations
    ],
  };

  export const Felix: SummonType = {
    name: Summon.FELIX,
    description: 'A white lop-eared dwarf rabbit',
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
  };

  export const HeraldicLion: SummonType = {
    name: Summon.HERALDIC_LION,
    description: 'A regal lion with an impecable stance',
    commands: [
      // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
      'Passant Stance', // claw
      'Rampant Stance', // multiple hasty attacks that reduce defense
      'Issuant Stance', // focus
      'Guardant Stance', // guard
    ],
  };

  export const Lyre: SummonType = {
    name: Summon.LYRE,
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    backstory: '',
  };

  export const Sandy: SummonType = {
    name: Summon.SANDY,
    description: 'A box turtle',
    backstory: '',
  };

  export const Ouruborus: SummonType = {
    name: Summon.OURUBORUS,
    description: 'A demon that consumes itself',
    backstory: '',
  };

  export const Mischievous: SummonType = {
    name: Summon.MISCHIEVOUS,
    description: 'A black and white cat',
    backstory: 'The Keeper of Law',
  };

  export const Scribbles: SummonType = {
    name: Summon.SCRIBBLES,
    description: 'A flying squirrel',
    backstory: '',
  };
}
