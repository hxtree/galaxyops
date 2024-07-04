/**
 * Summons are companions that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */

import { MenuSlot, MenuSlotType } from '../menu-slot';

export namespace Summon {
  export type Type = {
    name: string;
    description: string;
    backstory?: string;
    commands?: string[]; // must be invoked by summoner through Command
    menuSlot: MenuSlotType;
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
    menuSlot: MenuSlot.SUMMON,
  };

  export const FELIX: Type = {
    name: 'Felix',
    description: 'A white lop-eared dwarf rabbit',
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
    menuSlot: MenuSlot.SUMMON,
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
    menuSlot: MenuSlot.SUMMON,
  };

  export const SUMMON: Type = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const DISMISS: Type = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const COMMAND: Type = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const LYRE: Type = {
    name: 'Lyre',
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const SANDY: Type = {
    name: 'Sandy',
    description: 'A box turtle',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const MISCHIEVOUS: Type = {
    name: 'Mischievous',
    description: 'A black and white cat',
    backstory: 'The Keeper of Law',
    menuSlot: MenuSlot.SUMMON,
  };

  export const SCRIBBLES: Type = {
    name: 'Scribble',
    description: 'A flying squirrel',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  /**
   * Demon Summons primarily inspired by the Lesser Key of Solomon.
   * These are Malace's tattoos.
   */

  export const OUROBOROS: Type = {
    name: 'Ouroboros',
    description: 'A demon that consumes itself.',
    backstory: '',
    commands: ['Consume', 'Regenerate', 'Ensnare'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const ORIAS: Type = {
    name: 'Orias',
    description:
      'A Great Marquis of Hell, who rules over 30 legions of demons.',
    backstory:
      "He appears in the form of a lion with a serpent's tail, sitting upon a mighty horse.",
    commands: ['Roar', 'Summon Legions', 'Prowl'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const ASMODAY: Type = {
    name: 'Asmoday',
    description: 'A King of Hell with 72 legions of demons under his command.',
    backstory:
      'He appears with three heads: one like a bull, the second like a man, and the third like a ram.',
    commands: ['Triple Strike', 'Command Legions', 'Infernal Gaze'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const BELPHEGOR: Type = {
    name: 'Belphegor',
    description: 'A demon associated with discoveries and inventions.',
    backstory:
      'He tempts people by suggesting to them ingenious inventions that will make them rich.',
    commands: ['Inspire Invention', 'Wealth Temptation', 'Creative Insight'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const AMON: Type = {
    name: 'Amon',
    description: 'A Marquis of Hell who governs 40 legions of demons.',
    backstory: "He appears as a wolf with a serpent's tail, vomiting flames.",
    commands: ['Fiery Roar', 'Summon Legions', 'Inferno Breath'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const BARBATOS: Type = {
    name: 'Barbatos',
    description: 'A Duke of Hell who has power over 30 legions of demons.',
    backstory:
      'He appears as a great lion that has the wings of a gryphon, and he speaks hoarsely.',
    commands: ["Lion's Roar", 'Wings of Protection', "Gryphon's Call"],
    menuSlot: MenuSlot.SUMMON,
  };
}
