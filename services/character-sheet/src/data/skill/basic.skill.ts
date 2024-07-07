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
    name: 'Boast',
    level: SkillLevel.LV1,
    description: 'Increase party morale.',
    target: ActionTarget.ALLY,
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d6+10' }],
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const BOAST_LV2: SkillType = {
    ...BOAST_LV1,
    level: SkillLevel.LV2,
    cost: [{ remove: Attribute.SPIRIT, quantity: '2d6+10' }],
  };

  export const DISGUISE: SkillType = {
    name: 'Disguise',
    description: 'Changes appearance and disables command menu until canceled.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const DISMISS: SkillType = {
    name: 'Dismiss',
    description: 'Release a summon.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const FOCUS: SkillType = {
    name: 'Focus',
    description: 'Raise attack and attack percent for following move.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d6+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const GRAPPLE: SkillType = {
    name: 'Grapple',
    description: 'Lowers character and opponents life.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d6+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const HIDE: SkillType = {
    name: 'Hide',
    description: 'Become invisible to enemies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SCAN: SkillType = {
    name: 'Scan',
    description: 'Read enemies stats.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const CHEER: SkillType = {
    name: 'Cheer',
    description: 'Boost targets Spirit by 10% for a duration.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SUPPORT: SkillType = {
    name: 'Support',
    description: 'Provide support to allies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const HOPE: SkillType = {
    name: 'Hope',
    description: 'Bestow the most powerful status bonus.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const INSPIRE: SkillType = {
    name: 'Inspire',
    description: "Increase target's Drive gauge.",
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SCOUT: SkillType = {
    name: 'Scout',
    description: 'Move ahead of the party to gather information.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const MIMIC: SkillType = {
    name: 'Mimic',
    description: 'Use the last move performed on you against the enemy.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const PICKPOCKET: SkillType = {
    name: 'Pickpocket',
    description: 'Steal items from enemies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SEAL: SkillType = {
    name: 'Seal',
    description: 'Prevent enemies from approaching.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const LULLABY: SkillType = {
    name: 'Lullaby',
    description: 'Reflect enemy moves back at them.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const WARD: SkillType = {
    name: 'Ward',
    description: 'Keep enemies at bay with spiritual energy.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d20+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SACRIFICE: SkillType = {
    name: 'Sacrifice',
    description: 'Sacrifice something precious for a powerful effect.',
    effect: [],
    cost: [{ remove: Attribute.LIFE, quantity: '1d20+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const PROTECT: SkillType = {
    name: 'Protect',
    description: 'Guard party members behind you.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d20+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const MOCK: SkillType = {
    name: 'Mock',
    description: 'Taunt the enemy, potentially causing them to go berserk.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SEARCH: SkillType = {
    name: 'Search',
    description: 'Scan the nearby area for valuable items.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const STEAL: SkillType = {
    name: 'Steal',
    description: 'Take items from opponents.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const REFLECT: SkillType = {
    name: 'Reflect',
    description: 'Send enemy moves back at them.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const PROTECTION: SkillType = {
    name: 'Protection',
    description: 'Create a protective barrier around an ally.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const LIGHT: SkillType = {
    name: 'Light',
    description:
      'Bind enemies, potentially putting them to sleep and stopping their rage.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const RAGE: SkillType = {
    name: 'Rage',
    description: 'Increase power at the cost of wisdom.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };
}
