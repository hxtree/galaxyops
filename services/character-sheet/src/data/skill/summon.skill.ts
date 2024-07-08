import { MenuSlot } from '../menu-slot';
import { SkillType, SkillLevel } from './skill.type';

/**
 * Summons are companions that may be called into play in varying ways to aid party.
 * Summons can only be used with the Command action or through the Interaction Command.
 * Although they accept Commands they do not necessarily follow them.
 * Summons have different levels and stats just like characters.
 * The more a Player uses them the more powerful they grow.
 */
export namespace Summon {
  export const VACHEL_LV1: SkillType = {
    backstory: 'A bull that Meeku raised as a child',
    commands: [
      'Charge',
      'Graze', // eat grass
      'Pull Cart', // *Can be upgraded with CART to accommodate large Party.
      // Can be used with Overdrive combinations
    ],
    description: 'A silver bull',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Vachel',
  };

  export const FELIX_LV1: SkillType = {
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
    description: 'A white lop-eared dwarf rabbit',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Felix',
  };

  export const HERALDIC_LION_LV1: SkillType = {
    commands: [
      // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
      'Passant Stance', // claw
      'Rampant Stance', // multiple hasty attacks that reduce defense
      'Issuant Stance', // focus
      'Guardant Stance', // guard
    ],
    description: 'A regal lion with an impeccable stance',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Heraldic Lion',
  };

  export const SUMMON_LV1: SkillType = {
    backstory: '',
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };

  export const DISMISS_LV1: SkillType = {
    backstory: '',
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };

  export const COMMAND_LV1: SkillType = {
    backstory: '',
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };

  export const LYRE_LV1: SkillType = {
    backstory: '',
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Lyre',
  };

  export const SANDY_LV1: SkillType = {
    backstory: '',
    description: 'A box turtle',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Sandy',
  };

  export const MISCHIEVOUS_LV1: SkillType = {
    backstory: 'The Keeper of Law',
    description: 'A black and white cat',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Mischievous',
  };

  export const SCRIBBLES_LV1: SkillType = {
    backstory: '',
    description: 'A flying squirrel',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Scribble',
  };

  /**
   * Demon Summons primarily inspired by the Lesser Key of Solomon.
   * These are Malace's tattoos.
   */

  export const OUROBOROS_LV1: SkillType = {
    backstory: '',
    commands: ['Consume', 'Regenerate', 'Ensnare'],
    description: 'A demon that consumes itself.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Ouroboros',
  };

  export const ORIAS_LV1: SkillType = {
    backstory:
      "He appears in the form of a lion with a serpent's tail, sitting upon a mighty horse.",
    commands: ['Roar', 'Summon Legions', 'Prowl'],
    description:
      'A Great Marquis of Hell, who rules over 30 legions of demons.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Orias',
  };

  export const ASMODAY_LV1: SkillType = {
    backstory:
      'He appears with three heads: one like a bull, the second like a man, and the third like a ram.',
    commands: ['Triple Strike', 'Command Legions', 'Infernal Gaze'],
    description: 'A King of Hell with 72 legions of demons under his command.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Asmoday',
  };

  export const BELPHEGOR_LV1: SkillType = {
    backstory:
      'He tempts people by suggesting to them ingenious inventions that will make them rich.',
    commands: ['Inspire Invention', 'Wealth Temptation', 'Creative Insight'],
    description: 'A demon associated with discoveries and inventions.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Belphegor',
  };

  export const AMON_LV1: SkillType = {
    backstory: "He appears as a wolf with a serpent's tail, vomiting flames.",
    commands: ['Fiery Roar', 'Summon Legions', 'Inferno Breath'],
    description: 'A Marquis of Hell who governs 40 legions of demons.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Amon',
  };

  export const BARBATOS_LV1: SkillType = {
    backstory:
      'He appears as a great lion that has the wings of a gryphon, and he speaks hoarsely.',

    commands: ["Lion's Roar", 'Wings of Protection', "Gryphon's Call"],
    description: 'A Duke of Hell who has power over 30 legions of demons.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Barbatos',
  };
}
