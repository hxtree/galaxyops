/**
 * Summons are compainons that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */

export namespace Summon {
  export type Type = {
    name: string;
    description: string;
    backstory?: string;
    commands?: string[]; // must be invoked by summoner through Command
  };

  export const VACHEL: Type = {
    name: 'Vachel',
    description: 'A silver bull',
    backstory: 'A bull that Meeku raised as a child',
    commands: [
      'Charge',
      'Graze', // eat grass
      'Pull Cart', // *Can be upgraded with CART to accommodate large Party.
      // Can be used with Overdrive combinations
    ],
  };

  export const FELIX: Type = {
    name: 'Felix',
    description: 'A white lop-eared dwarf rabbit',
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
  };

  export const HERALDIC_LION: Type = {
    name: 'Heraldic Lion',
    description: 'A regal lion with an impecable stance',
    commands: [
      // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
      'Passant Stance', // claw
      'Rampant Stance', // multiple hasty attacks that reduce defense
      'Issuant Stance', // focus
      'Guardant Stance', // guard
    ],
  };

  export const SUMMON: Type = {
    name: '???',
    description: '',
    backstory: '',
  };

  export const DISMISS: Type = {
    name: '???',
    description: '',
    backstory: '',
  };

  export const COMMAND: Type = {
    name: '???',
    description: '',
    backstory: '',
  };

  export const LYRE: Type = {
    name: 'Lyre',
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    backstory: '',
  };

  export const SANDY: Type = {
    name: 'Sandy',
    description: 'A box turtle',
    backstory: '',
  };

  export const OURUBORUS: Type = {
    name: 'Ouruborus',
    description: 'A demon that consumes itself',
    backstory: '',
  };

  export const MISCHIEVOUS: Type = {
    name: 'Mischievous',
    description: 'A black and white cat',
    backstory: 'The Keeper of Law',
  };

  export const SCRIBBLES: Type = {
    name: 'Scribble',
    description: 'A flying squirrel',
    backstory: '',
  };

  // todo flesh out how these work with individual summons, seens like theyed be individually based
  // Malace's tattoos reference lesser key of solomon?
}
