import { EffectRecord, EffectTable } from '../table.effect';
import { Attribute } from '../attribute';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType, Focusable, SkillLevel } from './skill.type';
import { ActionTarget } from '../action-target';

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

  export const DISGUISE: SkillType = {
    description: 'Changes appearance and disables command menu until canceled.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Disguise',
  };

  export const DISMISS: SkillType = {
    description: 'Release a summon.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Dismiss',
  };

  export const FOCUS: SkillType = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Raise attack and attack percent for following move.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Focus',
  };

  export const GRAPPLE: SkillType = {
    cost: [{ quantity: '1d6+10', remove: Attribute.SPIRIT }],
    description: 'Lowers character and opponents life.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Grapple',
  };

  export const HIDE: SkillType = {
    description: 'Become invisible to enemies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Hide',
  };

  export const SCAN: SkillType = {
    description: 'Read enemies stats.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Scan',
  };

  export const CHEER: SkillType = {
    description: 'Boost targets Spirit by 10% for a duration.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Cheer',
  };

  export const SUPPORT: SkillType = {
    description: 'Provide support to allies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Support',
  };

  export const HOPE: SkillType = {
    description: 'Bestow the most powerful status bonus.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Hope',
  };

  export const INSPIRE: SkillType = {
    description: "Increase target's Drive gauge.",
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Inspire',
  };

  export const SCOUT: SkillType = {
    description: 'Move ahead of the party to gather information.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Scout',
  };

  export const MIMIC: SkillType = {
    description: 'Use the last move performed on you against the enemy.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Mimic',
  };

  export const PICKPOCKET: SkillType = {
    description: 'Steal items from enemies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Pickpocket',
  };

  export const SEAL: SkillType = {
    description: 'Prevent enemies from approaching.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Seal',
  };

  export const LULLABY: SkillType = {
    description: 'Reflect enemy moves back at them.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Lullaby',
  };

  export const WARD: SkillType = {
    cost: [{ quantity: '1d20+10', remove: Attribute.SPIRIT }],
    description: 'Keep enemies at bay with spiritual energy.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Ward',
  };

  export const SACRIFICE: SkillType = {
    cost: [{ quantity: '1d20+10', remove: Attribute.LIFE }],
    description: 'Sacrifice something precious for a powerful effect.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Sacrifice',
  };

  export const PROTECT: SkillType = {
    cost: [{ quantity: '1d20+10', remove: Attribute.SPIRIT }],
    description: 'Guard party members behind you.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Protect',
  };

  export const MOCK: SkillType = {
    description: 'Taunt the enemy, potentially causing them to go berserk.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Mock',
  };

  export const SEARCH: SkillType = {
    description: 'Scan the nearby area for valuable items.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Search',
  };

  export const STEAL: SkillType = {
    description: 'Take items from opponents.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Steal',
  };

  export const REFLECT: SkillType = {
    description: 'Send enemy moves back at them.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Reflect',
  };

  export const PROTECTION: SkillType = {
    description: 'Create a protective barrier around an ally.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Protection',
  };

  export const LIGHT: SkillType = {
    description:
      'Bind enemies, potentially putting them to sleep and stopping their rage.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Light',
  };

  export const RAGE: SkillType = {
    description: 'Increase power at the cost of wisdom.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
    name: 'Rage',
  };
}
