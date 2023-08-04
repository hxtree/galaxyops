import { EffectTable } from '../table.effect';
import { Attribute } from '../attribute';
import { MenuSlot } from '../menu-slot';

// todo really what makes something a class skill is whether it can be earned via class? decouple

/**
 * Class Skills are motor programs that a character learns to preform.
 * Each skill can be acquired via items, etc. but often
 * progression is determined by class.
 */
export namespace Basic {
  // fuel?
  // Whether when performing move if character can hold action to put more effort into action
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
    menuSlot: MenuSlot;
  };

  export const BOAST: Type = {
    name: 'Boast',
    description: 'increase party’s moral',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const DISGUISE: Type = {
    name: 'Disguise',
    description: 'Changes appearance and disables command menu until canceled.',
    effect: [],
    // stamina,
    menuSlot: MenuSlot.FIRST,
  };

  export const DISMISS: Type = {
    name: 'Dismiss',
    description: 'Release a summon.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const FOCUS: Type = {
    name: 'Focus',
    description: 'raise attack and attack percent for following move.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const GRAPPLE: Type = {
    name: 'Grapple',
    description: 'Lowers character and opponents life.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const HIDE: Type = {
    name: 'Hide',
    description: 'Enemy cannot see you',
    effect: [],
    // [stamina]
    menuSlot: MenuSlot.FIRST,
  };

  export const SCAN: Type = {
    name: 'Scan',
    description: 'Read enemies stats.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const CHEER: Type = {
    name: 'Cheer',
    description: 'Targets Spirit increases by 10% for a duration',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const SUPPORT: Type = {
    name: 'Support',
    description: 'Read enemies stats.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const HOPE: Type = {
    name: 'Hope',
    description: 'The most powerful status bonus',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const INSPIRE: Type = {
    name: 'Inspire',
    description: 'Increases target Drive gauge',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const SCOUT: Type = {
    name: 'Scout',
    description: 'Move ahead of party.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
    // constantly consumes stamina
  };

  export const MIMIC: Type = {
    name: 'Mimic',
    description: 'Use the same move that was used on you on the enemy.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const PICKPOCKET: Type = {
    name: 'Pickpocket',
    description: 'Steal from enemy.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
    // cost [stamina]
  };

  export const SEAL: Type = {
    name: 'Seal',
    description: 'Keep enemies from getting close.', // hold an enemy off
    //  (Good for when party is powering up)
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const LULLABY: Type = {
    name: 'Lullaby',
    description: 'Send enemies moves back at them',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const WARD: Type = {
    name: 'Ward',
    description: '"Keep enemies from getting close.',
    //  (Good for when party is powering up)
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const SACRIFICE: Type = {
    name: 'Sacrifice',
    description: '',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const PROTECT: Type = {
    name: 'Protect',
    description: 'guard party members behind you.',
    // [stamina]
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const MOCK: Type = {
    name: 'Mock',
    description: 'make a mocking action to cause Berserk on the opponent',
    // stamina]
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const SEARCH: Type = {
    name: 'Search',
    description: 'scan nearby area for goods.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const STEAL: Type = {
    name: 'Steal',
    description: 'Take item from opponent',
    // [stamina]
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const REFLECT: Type = {
    name: 'Reflect',
    description: 'Send enemies moves back at them.',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const PROTECTION: Type = {
    name: 'Protection',
    description: 'Create a barrier around a ally',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const LIGHT: Type = {
    name: 'Light',
    description:
      'Keep enemies from moving for a duration of time. Chance Puts enemy to sleep. Stops rage',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  export const RAGE: Type = {
    name: 'Rage',
    description: 'Increase power decrease wisdom',
    effect: [],
    menuSlot: MenuSlot.FIRST,
  };

  // "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"
}
