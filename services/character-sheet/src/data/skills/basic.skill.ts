import { Duration } from 'luxon';
import {
  Attribute,
  MenuSlot,
  Skill,
  SkillLevel,
  ActionTarget,
  AreaOfEffect,
  EffectTag,
} from '@galaxyops/character-sheet-contracts';

/**
 * Active Skills are motor programs that a character learns to perform.
 * Each skill can be acquired via items, etc., but often progression is
 * determined by class.
 */
export namespace Basic {
  export const CLAW_LV1: Skill = {
    description:
      'Initiate an aggressive strike with claws, aiming to inflict damage.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Claw',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.CLAW],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const BITE_LV1: Skill = {
    description: 'Bite aiming to inflict damage.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Bite',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.CLAW],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const BITE_LV2: Skill = {
    ...BITE_LV1,
    level: SkillLevel.LV2,
    outcome: {
      OPPONENT: [
        {
          quantity: '2d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d4',
          remove: Attribute.LIFE,
          tags: [EffectTag.POISON],
        },
      ],
    },
  };

  export const BITE_LV3: Skill = {
    ...BITE_LV1,
    level: SkillLevel.LV3,
    outcome: {
      OPPONENT: [
        {
          quantity: '3d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
        {
          duration: Duration.fromObject({ seconds: 60 }),
          quantity: '4d4',
          remove: Attribute.LIFE,
          tags: [EffectTag.POISON],
        },
      ],
    },
  };

  export const BOAST_LV1: Skill = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Increase party morale.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Boast',
    outcome: {
      ALLY: [
        {
          add: Attribute.SPIRIT,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const BOAST_LV2: Skill = {
    ...BOAST_LV1,
    cost: [{ quantity: '2d6+10', remove: Attribute.SPIRIT }],
    level: SkillLevel.LV2,
    outcome: {
      ALLY: [
        {
          add: Attribute.SPIRIT,
          duration: Duration.fromObject({ seconds: 40 }),
          quantity: '3d6+2',
        },
      ],
    },
  };

  export const DISGUISE_LV1: Skill = {
    description: 'Changes appearance and disables command menu until canceled.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Disguise',
    outcome: {},
  };

  export const FOCUS_LV1: Skill = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Raise power, spirit, and speed for a duration.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Focus',
    outcome: {
      ALLY: [
        {
          add: Attribute.POWER,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
        {
          add: Attribute.SPIRIT,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
        {
          add: Attribute.SPEED,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const GRAPPLE_LV1: Skill = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Lowers character and opponents life.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Grapple',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE },
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
          remove: Attribute.DEFENSE,
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const HIDE_LV1: Skill = {
    description: 'Become invisible to enemies.',
    // TODO: Add effect, possibly increase speed
    level: SkillLevel.LV1,

    menuSlot: MenuSlot.ABILITIES,
    name: 'Hide',
    outcome: {},
  };

  export const SCAN_LV1: Skill = {
    description: 'Read enemies stats.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Scan',
    outcome: {},
  };

  export const CHEER_LV1: Skill = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Boost nearby allies spirit.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Cheer',
    outcome: {
      ALLY: [
        {
          add: Attribute.SPIRIT,
          duration: Duration.fromObject({ seconds: 30 }),
          quantity: '10',
        },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const SUPPORT_LV1: Skill = {
    description: 'Provide support to allies.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Support',
    outcome: {},
  };

  export const HOPE_LV1: Skill = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Bestow the most powerful status bonus.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Hope',
    outcome: {
      ALLY: [
        {
          add: Attribute.POWER,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
        {
          add: Attribute.SPIRIT,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
        {
          add: Attribute.SPEED,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const INSPIRE_LV1: Skill = {
    description: "Increase target's Drive gauge.",
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Inspire',
    outcome: {
      ALLY: [
        {
          add: Attribute.DRIVE,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const SCOUT_LV1: Skill = {
    description: 'Move ahead of the party to gather information.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Scout',
    outcome: {},
  };

  export const MIMIC_LV1: Skill = {
    description: 'Use the last move performed on you against the enemy.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Mimic',
    outcome: {},
  };

  export const PICKPOCKET_LV1: Skill = {
    description: 'Steal items from enemies.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Pickpocket',
    outcome: {},
  };

  export const SEAL_LV1: Skill = {
    description: 'Prevent enemies from approaching.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Seal',
    outcome: {},
  };

  export const LULLABY_LV1: Skill = {
    description: 'Sing a song that dulls the senses of the enemy',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Lullaby',
    outcome: {
      OPPONENT: [
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '10d6+2',
          remove: Attribute.SPIRIT,
        },
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '10d6+2',
          remove: Attribute.WISDOM,
        },
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '10d6+2',
          remove: Attribute.DEFENSE,
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const WARD_LV1: Skill = {
    cost: [{ quantity: '1d20+10', remove: Attribute.SPIRIT }],
    description: 'Keep enemies at bay with spiritual energy.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Ward',
    outcome: {},
  };

  export const SACRIFICE_LV1: Skill = {
    cost: [{ quantity: '1d20+10', remove: Attribute.LIFE }],
    description: 'Sacrifice something precious for a powerful effect.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Sacrifice',
    outcome: {
      OPPONENT: [{ quantity: '1d20+10', remove: Attribute.LIFE }],
    },
  };

  export const PROTECT_LV1: Skill = {
    areaOfEffect: AreaOfEffect.CONE_REAR_15FT,
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    cost: [{ quantity: '1d20+10', remove: Attribute.SPIRIT }],
    description: 'Guard party members behind you.',
    executionTime: Duration.fromObject({ seconds: 15 }),
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Protect',
    outcome: {
      ALLY: [
        {
          add: Attribute.DEFENSE,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
      ],
    },
    prepareTime: Duration.fromObject({ seconds: 0.1 }),
    recoveryTime: Duration.fromObject({ seconds: 0.1 }),
    target: ActionTarget.ALLY,
  };

  export const MOCK_LV1: Skill = {
    description: 'Taunt the enemy, potentially causing them to go berserk.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Mock',
    outcome: {},
  };

  export const SEARCH_LV1: Skill = {
    description: 'Scan the nearby area for valuable items.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Search',
    outcome: {},
  };

  export const STEAL_LV1: Skill = {
    description: 'Take items from opponents.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Steal',
    outcome: {},
  };

  export const REFLECT_LV1: Skill = {
    description: 'Send enemy moves back at them.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Reflect',
    outcome: {},
  };

  export const PROTECTION_LV1: Skill = {
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    description: 'Create a protective barrier around an ally.',
    executionTime: Duration.fromObject({ seconds: 15 }),
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Protection',
    outcome: {
      ALLY: [
        {
          add: Attribute.DEFENSE,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
      ],
    },
    prepareTime: Duration.fromObject({ seconds: 0.1 }),
    recoveryTime: Duration.fromObject({ seconds: 0.1 }),
    target: ActionTarget.ALLY,
  };

  export const LIGHT_LV1: Skill = {
    description:
      'Bind enemies, potentially putting them to sleep and stopping their rage.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Light',
    outcome: {
      OPPONENT: [
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
          remove: Attribute.SPEED,
        },
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
          remove: Attribute.EVASION,
        },
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
          remove: Attribute.EVASION,
        },
      ],
    },
  };

  export const RAGE_LV1: Skill = {
    description: 'Increase power at the cost of wisdom.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Rage',
    outcome: {
      ALLY: [
        {
          add: Attribute.POWER,
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
        },
        {
          duration: Duration.fromObject({ seconds: 15 }),
          quantity: '1d6+2',
          remove: Attribute.WISDOM,
        },
      ],
    },
    target: ActionTarget.SELF,
  };
}
