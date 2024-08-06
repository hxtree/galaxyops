import {
  QuadrupedalCreatureGearSlots,
  Archetype,
} from '@galaxyops/character-sheet-contracts';

export namespace SummonArchetypes {
  export const VACHEL: Archetype = {
    backstory: 'A bull that Meeku raised as a child',
    description: 'A silver bull',
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Vachel',
    // commands: [
    // dismiss
    //   'Charge',
    //   'Graze', // eat grass
    //   'Pull Cart', // Can be upgraded with CART to accommodate large Party.
    //   // Can be used with Overdrive combinations
    // ],
  };

  export const FELIX: Archetype = {
    backstory:
      'Felix is a pet that Loomee adopts. He does not listen well. He likes to nibble on grass slowly.',
    description: 'A white lop-eared dwarf rabbit',
    name: 'Felix',
  };

  export const HERALDIC_LION: Archetype = {
    // commands: [
    //   // https://familyhistoryfoundation.com/2020/07/17/heraldic-lion-positions/
    //   'Passant Stance', // claw
    //   'Rampant Stance', // multiple hasty attacks that reduce defense
    //   'Issuant Stance', // focus
    //   'Guardant Stance', // guard
    // ],
    description: 'A regal lion with an impeccable stance',
    name: 'Heraldic Lion',
  };

  export const LYRE: Archetype = {
    backstory: '',
    description:
      'A giant half Luna moth and lyrebird that Faye can summon at will',
    name: 'Lyre',
  };

  export const SANDY: Archetype = {
    backstory:
      "Adores the cozy warmth of a freshly warmed, damp towel—possibly it's hard to tell.",
    description: 'A box turtle',
    name: 'Sandy',
  };

  export const MISCHIEVOUS: Archetype = {
    backstory: 'The Keeper of Law',
    description: 'A black and white cat',
    name: 'Mischievous',
  };

  export const SCRIBBLES: Archetype = {
    backstory: '',
    description: 'A flying squirrel',
    name: 'Scribble',
  };

  /**
   * Demon Summons primarily inspired by the Lesser Key of Solomon.
   * These are Malace's tattoos.
   */

  export const OUROBOROS: Archetype = {
    backstory: '',
    // commands: ['Consume', 'Regenerate', 'Ensnare'],
    description: 'A demon that consumes itself.',
    name: 'Ouroboros',
  };

  export const ORIAS: Archetype = {
    backstory:
      "He appears in the form of a lion with a serpent's tail, sitting upon a mighty horse.",
    // commands: ['Roar', 'Summon Legions', 'Prowl'],
    description:
      'A Great Marquis of Hell, who rules over 30 legions of demons.',
    name: 'Orias',
  };

  export const ASMODAY: Archetype = {
    backstory:
      'He appears with three heads: one like a bull, the second like a man, and the third like a ram.',
    // commands: ['Triple Strike', 'Command Legions', 'Infernal Gaze'],
    description: 'A King of Hell with 72 legions of demons under his command.',
    name: 'Asmoday',
  };

  export const BELPHEGOR: Archetype = {
    backstory:
      'He tempts people by suggesting to them ingenious inventions that will make them rich.',
    // commands: ['Inspire Invention', 'Wealth Temptation', 'Creative Insight'],
    description: 'A demon associated with discoveries and inventions.',
    name: 'Belphegor',
    // children: {
    //   DISMISS_LV1: SummonActions.DISMISS_LV1,
    // }
  };

  export const AMON: Archetype = {
    backstory: "He appears as a wolf with a serpent's tail, vomiting flames.",
    // commands: ['Fiery Roar', 'Summon Legions', 'Inferno Breath'],
    description: 'A Marquis of Hell who governs 40 legions of demons.',
    name: 'Amon',
    // children: {
    //   DISMISS_LV1: SummonActions.DISMISS_LV1,
    // }
  };

  export const BARBATOS: Archetype = {
    backstory:
      'He appears as a great lion that has the wings of a gryphon, and he speaks hoarsely.',
    // commands: ["Lion's Roar", 'Wings of Protection', "Gryphon's Call"],
    description: 'A Duke of Hell who has power over 30 legions of demons.',
    name: 'Barbatos',
  };
}
