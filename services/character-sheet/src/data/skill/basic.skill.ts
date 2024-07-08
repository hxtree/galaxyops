import { Duration } from 'luxon';
import { EffectRecord, EffectTable } from '../table.effect';
import { Attribute } from '../attribute';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType, Focusable, SkillLevel } from './skill.type';
import { ActionTarget } from '../action-target';
import { AreaOfEffect } from '../area-of-effect';

/**
 * Active Skills are motor programs that a character learns to perform.
 * Each skill can be acquired via items, etc., but often progression is
 * determined by class.
 */
export namespace Basic {
  export const BOAST_LV1: SkillType = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Increase party morale.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Boast',
    target: ActionTarget.ALLY,
  };

  export const BOAST_LV2: SkillType = {
    ...BOAST_LV1,
    cost: [{ quantity: '2d6+10', remove: Attribute.SPIRIT }],
    level: SkillLevel.LV2,
  };

  export const DISGUISE_LV1: SkillType = {
    description: 'Changes appearance and disables command menu until canceled.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Disguise',
  };

  export const DISMISS_LV1: SkillType = {
    description: 'Release a summon.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Dismiss',
  };

  export const FOCUS_LV1: SkillType = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Raise power, spirit, and speed for a duration.',
    effect: [
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
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Focus',
    target: ActionTarget.SELF,
  };

  export const GRAPPLE_LV1: SkillType = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Lowers character and opponents life.',
    effect: [
      { quantity: '1d6+2', remove: Attribute.LIFE },
      {
        duration: Duration.fromObject({ seconds: 15 }),
        quantity: '1d6+2',
        remove: Attribute.DEFENSE,
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Grapple',
    target: ActionTarget.OPPONENT,
  };

  export const HIDE_LV1: SkillType = {
    description: 'Become invisible to enemies.',
    effect: [
      // TODO: Add effect, possibly increase speed
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Hide',
  };

  export const SCAN_LV1: SkillType = {
    description: 'Read enemies stats.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Scan',
  };

  export const CHEER_LV1: SkillType = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Boost nearby allies spirit.',
    effect: [
      {
        add: Attribute.SPIRIT,
        duration: Duration.fromObject({ seconds: 30 }),
        quantity: '10',
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Cheer',
    target: ActionTarget.ALLY,
  };

  export const SUPPORT_LV1: SkillType = {
    description: 'Provide support to allies.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Support',
  };

  export const HOPE_LV1: SkillType = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Bestow the most powerful status bonus.',
    effect: [
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
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Hope',
    target: ActionTarget.ALLY,
  };

  export const INSPIRE_LV1: SkillType = {
    description: "Increase target's Drive gauge.",
    effect: [
      {
        add: Attribute.DRIVE,
        duration: Duration.fromObject({ seconds: 15 }),
        quantity: '1d6+2',
      },
    ],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Inspire',
    target: ActionTarget.ALLY,
  };

  export const SCOUT_LV1: SkillType = {
    description: 'Move ahead of the party to gather information.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Scout',
  };

  export const MIMIC_LV1: SkillType = {
    description: 'Use the last move performed on you against the enemy.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Mimic',
  };

  export const PICKPOCKET_LV1: SkillType = {
    description: 'Steal items from enemies.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Pickpocket',
  };

  export const SEAL_LV1: SkillType = {
    description: 'Prevent enemies from approaching.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Seal',
  };

  export const LULLABY_LV1: SkillType = {
    description: 'Sing a song that dulls the senses of the enemy',
    effect: [
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
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Lullaby',
    target: ActionTarget.OPPONENT,
  };

  export const WARD_LV1: SkillType = {
    cost: [{ quantity: '1d20+10', remove: Attribute.SPIRIT }],
    description: 'Keep enemies at bay with spiritual energy.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Ward',
  };

  export const SACRIFICE_LV1: SkillType = {
    cost: [{ quantity: '1d20+10', remove: Attribute.LIFE }],
    description: 'Sacrifice something precious for a powerful effect.',
    effect: [{ quantity: '1d20+10', remove: Attribute.LIFE }],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Sacrifice',
  };

  export const PROTECT_LV1: SkillType = {
    areaOfEffect: AreaOfEffect.CONE_REAR_15FT,
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    cost: [{ quantity: '1d20+10', remove: Attribute.SPIRIT }],
    description: 'Guard party members behind you.',
    effect: [
      {
        add: Attribute.DEFENSE,
        duration: Duration.fromObject({ seconds: 15 }),
        quantity: '1d6+2',
      },
    ],
    executionTime: Duration.fromObject({ seconds: 15 }),
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Protect',
    prepareTime: Duration.fromObject({ seconds: 0.1 }),
    recoveryTime: Duration.fromObject({ seconds: 0.1 }),
    target: ActionTarget.ALLY,
  };

  export const MOCK_LV1: SkillType = {
    description: 'Taunt the enemy, potentially causing them to go berserk.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Mock',
  };

  export const SEARCH_LV1: SkillType = {
    description: 'Scan the nearby area for valuable items.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Search',
  };

  export const STEAL_LV1: SkillType = {
    description: 'Take items from opponents.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Steal',
  };

  export const REFLECT_LV1: SkillType = {
    description: 'Send enemy moves back at them.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Reflect',
  };

  export const PROTECTION_LV1: SkillType = {
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    description: 'Create a protective barrier around an ally.',
    effect: [
      {
        add: Attribute.DEFENSE,
        duration: Duration.fromObject({ seconds: 15 }),
        quantity: '1d6+2',
      },
    ],
    executionTime: Duration.fromObject({ seconds: 15 }),
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Protection',
    prepareTime: Duration.fromObject({ seconds: 0.1 }),
    recoveryTime: Duration.fromObject({ seconds: 0.1 }),
    target: ActionTarget.ALLY,
  };

  export const LIGHT_LV1: SkillType = {
    description:
      'Bind enemies, potentially putting them to sleep and stopping their rage.',
    effect: [],
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Light',
  };

  export const RAGE_LV1: SkillType = {
    description: 'Increase power at the cost of wisdom.',
    effect: [
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
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ABILITIES,
    name: 'Rage',
    target: ActionTarget.SELF,
  };
}
