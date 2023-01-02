import { EffectTable } from '../table.effect';
import { Attribute } from '../attribute';

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
  };

  export const BOAST: Type = {
    name: 'Boast',
    description: 'increase party’s moral',
    effect: [],
  };

  export const DISGUISE: Type = {
    name: 'Disguise',
    description: 'Changes appearance and disables command menu until canceled.',
    effect: [],
    // stamina
  };

  export const DISMISS: Type = {
    name: 'Dismiss',
    description: 'Release a summon.',
    effect: [],
  };

  export const FOCUS: Type = {
    name: 'Focus',
    description: 'raise attack and attack percent for following move.',
    effect: [],
  };

  export const GRAPPLE: Type = {
    name: 'Grapple',
    description: 'Lowers character and opponents life.',
    effect: [],
  };

  export const HIDE: Type = {
    name: 'Hide',
    description: 'Enemy cannot see you',
    effect: [],
    // [stamina]
  };

  export const SCAN: Type = {
    name: 'Scan',
    description: 'Read enemies stats.',
    effect: [],
  };

  export const CHEER: Type = {
    name: 'Cheer',
    description: 'Targets Spirit increases by 10% for a duration',
    effect: [],
  };

  export const SUPPORT: Type = {
    name: 'Support',
    description: 'Read enemies stats.',
    effect: [],
  };

  export const HOPE: Type = {
    name: 'Hope',
    description: 'The most powerful status bonus',
    effect: [],
  };

  export const INSPIRE: Type = {
    name: 'Inspire',
    description: 'Increases target Drive gauge',
    effect: [],
  };

  export const SCOUT: Type = {
    name: 'Scout',
    description: 'Move ahead of party.',
    effect: [],
    // constantly consumes stamina
  };

  export const MIMIC: Type = {
    name: 'Mimic',
    description: 'Use the same move that was used on you on the enemy.',
    effect: [],
  };

  export const PICKPOCKET: Type = {
    name: 'Pickpocket',
    description: 'Steal from enemy.',
    effect: [],
    // cost [stamina]
  };

  export const SEAL: Type = {
    name: 'Seal',
    description: 'Keep enemies from getting close.', // hold an enemy off
    //  (Good for when party is powering up)
    effect: [],
  };

  export const LULLABY: Type = {
    name: 'Lullaby',
    description: 'Send enemies moves back at them',
    effect: [],
  };

  export const WARD: Type = {
    name: 'Ward',
    description: '"Keep enemies from getting close.',
    //  (Good for when party is powering up)
    effect: [],
  };

  export const SACRIFICE: Type = {
    name: 'Sacrifice',
    description: '',
    effect: [],
  };

  export const PROTECT: Type = {
    name: 'Protect',
    description: 'guard party members behind you.',
    // [stamina]
    effect: [],
  };

  export const MOCK: Type = {
    name: 'Mock',
    description: 'make a mocking action to cause Berserk on the opponent',
    // stamina]
    effect: [],
  };

  export const SEARCH: Type = {
    name: 'Search',
    description: 'scan nearby area for goods.',
    effect: [],
  };

  export const STEAL: Type = {
    name: 'Steal',
    description: 'Take item from opponent',
    // [stamina]
    effect: [],
  };

  export const REFLECT: Type = {
    name: 'Reflect',
    description: 'Send enemies moves back at them.',
    effect: [],
  };

  export const PROTECTION: Type = {
    name: 'Protection',
    description: 'Create a barrier around a ally',
    effect: [],
  };
  export const LIGHT: Type = {
    name: 'Light',
    description:
      'Keep enemies from moving for a duration of time. Chance Puts enemy to sleep. Stops rage',
    effect: [],
  };

  export const RAGE: Type = {
    name: 'Rage',
    description: 'Increase power decrease wisdom',
    effect: [],
  };

  // "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"
}
