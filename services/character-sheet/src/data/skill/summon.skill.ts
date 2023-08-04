/**
 * Summons are companions that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */

import { MenuSlot } from '../menu-slot';

export namespace Summon {
  export type Type = {
    name: string;
    description: string;
    backstory?: string;
    commands?: string[]; // must be invoked by summoner through Command
    menuSlot: MenuSlot;
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
    menuSlot: MenuSlot.SECOND,
  };

  export const FELIX: Type = {
    name: 'Felix',
    description: 'A white lop-eared dwarf rabbit',
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
    menuSlot: MenuSlot.SECOND,
  };

  export const HERALDIC_LION: Type = {
    name: 'Heraldic Lion',
    description: 'A regal lion with an impeccable stance',
    commands: [
      // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
      'Passant Stance', // claw
      'Rampant Stance', // multiple hasty attacks that reduce defense
      'Issuant Stance', // focus
      'Guardant Stance', // guard
    ],
    menuSlot: MenuSlot.SECOND,
  };

  export const SUMMON: Type = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
  };

  export const DISMISS: Type = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
  };

  export const COMMAND: Type = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
  };

  export const LYRE: Type = {
    name: 'Lyre',
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
  };

  export const SANDY: Type = {
    name: 'Sandy',
    description: 'A box turtle',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
  };

  export const OUROBOROS: Type = {
    name: 'Ouroboros',
    description: 'A demon that consumes itself',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
  };

  export const MISCHIEVOUS: Type = {
    name: 'Mischievous',
    description: 'A black and white cat',
    backstory: 'The Keeper of Law',
    menuSlot: MenuSlot.SECOND,
  };

  export const SCRIBBLES: Type = {
    name: 'Scribble',
    description: 'A flying squirrel',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
  };

  // todo flesh out how these work with individual summons, seems like they'ed be individually based
  // Malace's tattoos reference lesser key of solomon?
}
