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

  /**
   * Summonable Demons primarily inspired by the Lesser Key of Solomon.
   * These are Malace's tattoos.
   */

  export const OUROBOROS: Type = {
    name: 'Ouroboros',
    description: 'A demon that consumes itself.',
    backstory: '',
    menuSlot: MenuSlot.SECOND,
    commands: ['Consume', 'Regenerate', 'Ensnare'],
  };

  export const ORIAS: Type = {
    name: 'Orias',
    description:
      'A Great Marquis of Hell, who rules over 30 legions of demons.',
    backstory:
      "He appears in the form of a lion with a serpent's tail, sitting upon a mighty horse.",
    menuSlot: MenuSlot.SECOND,
    commands: ['Roar', 'Summon Legions', 'Prowl'],
  };

  export const ASMODAY: Type = {
    name: 'Asmoday',
    description: 'A King of Hell with 72 legions of demons under his command.',
    backstory:
      'He appears with three heads: one like a bull, the second like a man, and the third like a ram.',
    menuSlot: MenuSlot.SECOND,
    commands: ['Triple Strike', 'Command Legions', 'Infernal Gaze'],
  };

  export const BELPHEGOR: Type = {
    name: 'Belphegor',
    description: 'A demon associated with discoveries and inventions.',
    backstory:
      'He tempts people by suggesting to them ingenious inventions that will make them rich.',
    menuSlot: MenuSlot.SECOND,
    commands: ['Inspire Invention', 'Wealth Temptation', 'Creative Insight'],
  };

  export const AMON: Type = {
    name: 'Amon',
    description: 'A Marquis of Hell who governs 40 legions of demons.',
    backstory: "He appears as a wolf with a serpent's tail, vomiting flames.",
    menuSlot: MenuSlot.SECOND,
    commands: ['Fiery Roar', 'Summon Legions', 'Inferno Breath'],
  };

  export const BARBATOS: Type = {
    name: 'Barbatos',
    description: 'A Duke of Hell who has power over 30 legions of demons.',
    backstory:
      'He appears as a great lion that has the wings of a gryphon, and he speaks hoarsely.',
    menuSlot: MenuSlot.SECOND,
    commands: ["Lion's Roar", 'Wings of Protection', "Gryphon's Call"],
  };
}
