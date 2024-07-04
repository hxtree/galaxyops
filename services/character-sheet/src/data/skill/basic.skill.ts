import { EffectRecord, EffectTable } from '../table.effect';
import { Attribute } from '../attribute';
import { MenuSlot, MenuSlotType } from '../menu-slot';

/**
 * Active Skills are motor programs that a character learns to perform.
 * Each skill can be acquired via items, etc., but often progression is determined by class.
 */
export namespace Basic {
  export enum Focusable {
    STAMINA = 'Stamina',
    TRUE = 'True',
    FALSE = 'False',
  }

  export type Type = {
    name: string;
    description: string;
    effect: EffectTable;

    /**
     * Whether the skill must be canceled or automatically stop being performed
     */
    fixed?: boolean;

    /**
     * Stamina Boost Enabled Action
     * By holding down the button used to make that move
     * a player may place more stamina into the move
     * making it a more powerful action.
     * For every 6 seconds, character gains a plus 1 for example.
     */
    booster?: Attribute;

    /**
     * Cost is the resource expenditure that must be given up by the actor to
     * perform the action. By holding button longer additional cost can be
     * consumed for some skills.
     */
    cost?: EffectRecord[];

    menuSlot: MenuSlotType;
  };

  export const BOAST: Type = {
    name: 'Boast',
    description: 'Increase party morale.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d6+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const DISGUISE: Type = {
    name: 'Disguise',
    description: 'Changes appearance and disables command menu until canceled.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const DISMISS: Type = {
    name: 'Dismiss',
    description: 'Release a summon.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const FOCUS: Type = {
    name: 'Focus',
    description: 'Raise attack and attack percent for following move.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d6+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const GRAPPLE: Type = {
    name: 'Grapple',
    description: 'Lowers character and opponents life.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d6+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const HIDE: Type = {
    name: 'Hide',
    description: 'Become invisible to enemies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SCAN: Type = {
    name: 'Scan',
    description: 'Read enemies stats.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const CHEER: Type = {
    name: 'Cheer',
    description: 'Boost targets Spirit by 10% for a duration.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SUPPORT: Type = {
    name: 'Support',
    description: 'Provide support to allies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const HOPE: Type = {
    name: 'Hope',
    description: 'Bestow the most powerful status bonus.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const INSPIRE: Type = {
    name: 'Inspire',
    description: "Increase target's Drive gauge.",
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SCOUT: Type = {
    name: 'Scout',
    description: 'Move ahead of the party to gather information.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const MIMIC: Type = {
    name: 'Mimic',
    description: 'Use the last move performed on you against the enemy.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const PICKPOCKET: Type = {
    name: 'Pickpocket',
    description: 'Steal items from enemies.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SEAL: Type = {
    name: 'Seal',
    description: 'Prevent enemies from approaching.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const LULLABY: Type = {
    name: 'Lullaby',
    description: 'Reflect enemy moves back at them.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const WARD: Type = {
    name: 'Ward',
    description: 'Keep enemies at bay with spiritual energy.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d20+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SACRIFICE: Type = {
    name: 'Sacrifice',
    description: 'Sacrifice something precious for a powerful effect.',
    effect: [],
    cost: [{ remove: Attribute.LIFE, quantity: '1d20+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const PROTECT: Type = {
    name: 'Protect',
    description: 'Guard party members behind you.',
    effect: [],
    cost: [{ remove: Attribute.SPIRIT, quantity: '1d20+10' }],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const MOCK: Type = {
    name: 'Mock',
    description: 'Taunt the enemy, potentially causing them to go berserk.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const SEARCH: Type = {
    name: 'Search',
    description: 'Scan the nearby area for valuable items.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const STEAL: Type = {
    name: 'Steal',
    description: 'Take items from opponents.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const REFLECT: Type = {
    name: 'Reflect',
    description: 'Send enemy moves back at them.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const PROTECTION: Type = {
    name: 'Protection',
    description: 'Create a protective barrier around an ally.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const LIGHT: Type = {
    name: 'Light',
    description:
      'Bind enemies, potentially putting them to sleep and stopping their rage.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };

  export const RAGE: Type = {
    name: 'Rage',
    description: 'Increase power at the cost of wisdom.',
    effect: [],
    menuSlot: MenuSlot.ABILITIES,
  };
}
