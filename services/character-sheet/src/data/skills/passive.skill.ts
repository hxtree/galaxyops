import {
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

/**
 * Passive skills are innate abilities or enhancements possessed by characters
 * that do not require conscious activation. Instead, they operate automatically
 * or passively, often enhancing the character's attributes or providing
 * continuous benefits without the need for direct input. These skills are akin
 * to natural instincts or abilities that are constantly active in the
 * background, contributing to the character's overall capabilities without the
 * need for deliberate action.
 */
export namespace Passive {
  export const THE_ONE_MAX: Skill = {
    description: 'Hidden.',
    level: SkillLevel.MAX,
    menuSlot: MenuSlot.NONE,
    name: '(Unknown)',
    outcome: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.DEFENSE,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.LIFE,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const PHYSICAL_CONDITIONING_LV1: Skill = {
    description: 'Increases all attributes.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Physical Conditioning',
    outcome: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.DEFENSE,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.LIFE,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const PHYSICAL_CONDITIONING_LV2: Skill = {
    ...PHYSICAL_CONDITIONING_LV1,
    level: SkillLevel.LV2,
    outcome: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.DEFENSE,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.LIFE,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
  };

  export const PHYSICAL_CONDITIONING_LV3: Skill = {
    ...PHYSICAL_CONDITIONING_LV1,
    level: SkillLevel.LV3,
    outcome: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '30',
        },
        {
          add: Attribute.DEFENSE,
          chance: 1.0,
          quantity: '30',
        },
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '30',
        },
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '30',
        },
        {
          add: Attribute.LIFE,
          chance: 1.0,
          quantity: '30',
        },
      ],
    },
  };

  export const SPIRITUAL_GROWTH_LV1: Skill = {
    description: 'Increases spirit',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Spiritual Growth',
    outcome: {
      SELF: [
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const MENTAL_DISCIPLINE_LV1: Skill = {
    description: 'Mental Discipline',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Mental Discipline',
    outcome: {
      SELF: [
        {
          add: Attribute.INTELLIGENCE,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.DRIVE,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const PRECISION_AND_TECHNIQUE_LV1: Skill = {
    description: 'Align body correctly to generate more power and speed.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Precision and Technique',
    outcome: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const DUAL_WELD_LV1: Skill = {
    description: 'Can use two one handed weapons at once.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Dual Weld',
    target: ActionTarget.SELF,
  };

  export const ESCAPE_ARTIST_LV1: Skill = {
    description: 'Makes it easier to run away from aggressive targets',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Escape Artist',
    outcome: {
      SELF: [
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const INTIMIDATE_LV1: Skill = {
    description: 'Causes fear in enemy',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Intimidate',
    target: ActionTarget.OPPONENT,
  };

  export const CONCENTRATION_LV1: Skill = {
    description: 'Maintain focused for longer periods of time',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Concentration',
    outcome: {
      SELF: [
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const CONCENTRATION_LV2: Skill = {
    ...CONCENTRATION_LV1,
    level: SkillLevel.LV2,
    outcome: {
      SELF: [
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
  };

  export const BLUFF_LV1: Skill = {
    description: 'Tell a lie without being caught',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Bluff',
    outcome: {
      SELF: [
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const SENSE_BLUFF_LV1: Skill = {
    description: 'Detect if a lie is being told',
    level: SkillLevel.LV1,
    // if character beats bluff check, a little icon on the screen will tell
    // if someone is trying to bluff party
    menuSlot: MenuSlot.NONE,
    name: 'Sense Bluff',
    target: ActionTarget.SELF,
  };
  export const GREEDY_INTENT_LV1: Skill = {
    description: 'Gain more experience than the party.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Greedy Intent',
    outcome: {
      SELF: [
        {
          add: Attribute.EXPERIENCE,
          chance: 1.0,
          quantity: '5',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const SLOTH_COMPOSURE_LV1: Skill = {
    description: 'Decreases damage taken',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Sloth Composure',
    outcome: {
      SELF: [
        {
          add: Attribute.DEFENSE,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const BLOOD_LUST_LV1: Skill = {
    description: 'Increases speed.',

    level: SkillLevel.LV1,

    menuSlot: MenuSlot.NONE,

    name: 'Blood Lust',
    // Acquired by defeating Lust.
    outcome: {
      SELF: [
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const ENVIOUS_OF_COMBAT_LV1: Skill = {
    description: 'Gains increased power.',

    level: SkillLevel.LV1,

    menuSlot: MenuSlot.NONE,

    name: 'Envious of Combat',
    // Acquired by defeating Envy.
    outcome: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const GLUTTONOUS_DESIRE_LV1: Skill = {
    description: 'Consumes food items twice as fast.',
    level: SkillLevel.LV1,
    // Acquired by defeating Gluttony.
    menuSlot: MenuSlot.NONE,

    name: 'Gluttonous Desire',
    outcome: {
      SELF: [
        {
          add: Attribute.LIFE,
          chance: 1.0,
          quantity: '10',
        },
        // TODO add effect for consuming food
      ],
    },
    target: ActionTarget.SELF,
  };

  export const CATCHER_LV1: Skill = {
    description: 'Receives bonuses when catching items.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Catcher',
    outcome: {
      SELF: [
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const LIMITLESS_LV1: Skill = {
    description: 'Higher level cap.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Limitless',
    target: ActionTarget.SELF,
  };

  /** Seven Sins */

  export const WRATH_INCARNATE: Skill = {
    description: 'Manifestation of wrath.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Wrath Incarnate',

    outcome: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '150',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const SLOTH_INCARNATE: Skill = {
    description: 'Manifestation of sloth.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Sloth Incarnate',
    outcome: {
      SELF: [
        {
          chance: 1.0,
          quantity: '50',
          remove: Attribute.SPEED,
        },
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '300',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const LUST_INCARNATE: Skill = {
    description: 'Manifestation of lust.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Lust Incarnate',
    target: ActionTarget.SELF,
  };

  export const GLUTTONY_INCARNATE: Skill = {
    description: 'Manifestation of gluttony.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Gluttony Incarnate',
    target: ActionTarget.SELF,
  };

  export const PRIDE_INCARNATE: Skill = {
    description: 'Manifestation of pride.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Pride Incarnate',
    target: ActionTarget.SELF,
  };

  export const ENVY_INCARNATE: Skill = {
    description: 'Manifestation of envy.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Envy Incarnate',
    target: ActionTarget.SELF,
  };

  export const GREED_INCARNATE: Skill = {
    description: 'Manifestation of greed.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Greed Incarnate',
    target: ActionTarget.SELF,
  };

  // TODO add more passive skills for the following:
  // FISH
  // FOX
  // HYENA_
  // OX_KING
  // SERPANT_GOD
}
