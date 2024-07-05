import { MenuSlot } from '../menu-slot';
import { SkillType } from '.';

/**
 * Summons are companions that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export namespace Summon {
  export const VACHEL: SkillType = {
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

  export const FELIX: SkillType = {
    name: 'Felix',
    description: 'A white lop-eared dwarf rabbit',
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
    menuSlot: MenuSlot.SUMMON,
  };

  export const HERALDIC_LION: SkillType = {
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

  export const SUMMON: SkillType = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const DISMISS: SkillType = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const COMMAND: SkillType = {
    name: '???',
    description: '',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const LYRE: SkillType = {
    name: 'Lyre',
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const SANDY: SkillType = {
    name: 'Sandy',
    description: 'A box turtle',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  export const MISCHIEVOUS: SkillType = {
    name: 'Mischievous',
    description: 'A black and white cat',
    backstory: 'The Keeper of Law',
    menuSlot: MenuSlot.SUMMON,
  };

  export const SCRIBBLES: SkillType = {
    name: 'Scribble',
    description: 'A flying squirrel',
    backstory: '',
    menuSlot: MenuSlot.SUMMON,
  };

  /**
   * Demon Summons primarily inspired by the Lesser Key of Solomon.
   * These are Malace's tattoos.
   */

  export const OUROBOROS: SkillType = {
    name: 'Ouroboros',
    description: 'A demon that consumes itself.',
    backstory: '',
    commands: ['Consume', 'Regenerate', 'Ensnare'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const ORIAS: SkillType = {
    name: 'Orias',
    description:
      'A Great Marquis of Hell, who rules over 30 legions of demons.',
    backstory:
      "He appears in the form of a lion with a serpent's tail, sitting upon a mighty horse.",
    commands: ['Roar', 'Summon Legions', 'Prowl'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const ASMODAY: SkillType = {
    name: 'Asmoday',
    description: 'A King of Hell with 72 legions of demons under his command.',
    backstory:
      'He appears with three heads: one like a bull, the second like a man, and the third like a ram.',
    commands: ['Triple Strike', 'Command Legions', 'Infernal Gaze'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const BELPHEGOR: SkillType = {
    name: 'Belphegor',
    description: 'A demon associated with discoveries and inventions.',
    backstory:
      'He tempts people by suggesting to them ingenious inventions that will make them rich.',
    commands: ['Inspire Invention', 'Wealth Temptation', 'Creative Insight'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const AMON: SkillType = {
    name: 'Amon',
    description: 'A Marquis of Hell who governs 40 legions of demons.',
    backstory: "He appears as a wolf with a serpent's tail, vomiting flames.",
    commands: ['Fiery Roar', 'Summon Legions', 'Inferno Breath'],
    menuSlot: MenuSlot.SUMMON,
  };

  export const BARBATOS: SkillType = {
    name: 'Barbatos',
    description: 'A Duke of Hell who has power over 30 legions of demons.',
    backstory:
      'He appears as a great lion that has the wings of a gryphon, and he speaks hoarsely.',
    commands: ["Lion's Roar", 'Wings of Protection', "Gryphon's Call"],
    menuSlot: MenuSlot.SUMMON,
  };
}
