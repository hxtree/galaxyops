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
    backstory: 'A bull that Meeku raised as a child',
    commands: [
      'Charge',
      'Graze', // eat grass
      'Pull Cart', // *Can be upgraded with CART to accommodate large Party.
      // Can be used with Overdrive combinations
    ],
    description: 'A silver bull',
    menuSlot: MenuSlot.SUMMON,
    name: 'Vachel',
  };

  export const FELIX: SkillType = {
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
    description: 'A white lop-eared dwarf rabbit',
    menuSlot: MenuSlot.SUMMON,
    name: 'Felix',
  };

  export const HERALDIC_LION: SkillType = {
    commands: [
      // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
      'Passant Stance', // claw
      'Rampant Stance', // multiple hasty attacks that reduce defense
      'Issuant Stance', // focus
      'Guardant Stance', // guard
    ],
    description: 'A regal lion with an impeccable stance',
    menuSlot: MenuSlot.SUMMON,
    name: 'Heraldic Lion',
  };

  export const SUMMON: SkillType = {
    backstory: '',
    description: '',
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };

  export const DISMISS: SkillType = {
    backstory: '',
    description: '',
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };

  export const COMMAND: SkillType = {
    backstory: '',
    description: '',
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };

  export const LYRE: SkillType = {
    backstory: '',
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    menuSlot: MenuSlot.SUMMON,
    name: 'Lyre',
  };

  export const SANDY: SkillType = {
    backstory: '',
    description: 'A box turtle',
    menuSlot: MenuSlot.SUMMON,
    name: 'Sandy',
  };

  export const MISCHIEVOUS: SkillType = {
    backstory: 'The Keeper of Law',
    description: 'A black and white cat',
    menuSlot: MenuSlot.SUMMON,
    name: 'Mischievous',
  };

  export const SCRIBBLES: SkillType = {
    backstory: '',
    description: 'A flying squirrel',
    menuSlot: MenuSlot.SUMMON,
    name: 'Scribble',
  };

  /**
   * Demon Summons primarily inspired by the Lesser Key of Solomon.
   * These are Malace's tattoos.
   */

  export const OUROBOROS: SkillType = {
    backstory: '',
    commands: ['Consume', 'Regenerate', 'Ensnare'],
    description: 'A demon that consumes itself.',
    menuSlot: MenuSlot.SUMMON,
    name: 'Ouroboros',
  };

  export const ORIAS: SkillType = {
    backstory:
      "He appears in the form of a lion with a serpent's tail, sitting upon a mighty horse.",
    commands: ['Roar', 'Summon Legions', 'Prowl'],
    description:
      'A Great Marquis of Hell, who rules over 30 legions of demons.',
    menuSlot: MenuSlot.SUMMON,
    name: 'Orias',
  };

  export const ASMODAY: SkillType = {
    backstory:
      'He appears with three heads: one like a bull, the second like a man, and the third like a ram.',
    commands: ['Triple Strike', 'Command Legions', 'Infernal Gaze'],
    description: 'A King of Hell with 72 legions of demons under his command.',
    menuSlot: MenuSlot.SUMMON,
    name: 'Asmoday',
  };

  export const BELPHEGOR: SkillType = {
    backstory:
      'He tempts people by suggesting to them ingenious inventions that will make them rich.',
    commands: ['Inspire Invention', 'Wealth Temptation', 'Creative Insight'],
    description: 'A demon associated with discoveries and inventions.',
    menuSlot: MenuSlot.SUMMON,
    name: 'Belphegor',
  };

  export const AMON: SkillType = {
    backstory: "He appears as a wolf with a serpent's tail, vomiting flames.",
    commands: ['Fiery Roar', 'Summon Legions', 'Inferno Breath'],
    description: 'A Marquis of Hell who governs 40 legions of demons.',
    menuSlot: MenuSlot.SUMMON,
    name: 'Amon',
  };

  export const BARBATOS: SkillType = {
    backstory:
      'He appears as a great lion that has the wings of a gryphon, and he speaks hoarsely.',
    commands: ["Lion's Roar", 'Wings of Protection', "Gryphon's Call"],
    description: 'A Duke of Hell who has power over 30 legions of demons.',
    menuSlot: MenuSlot.SUMMON,
    name: 'Barbatos',
  };
}
