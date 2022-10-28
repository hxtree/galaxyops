import {EffectTable} from '../table.effect';
import {Attribute} from '../attribute';

// fuel?
// Whether when performing move if character can hold action to put more effort into action
export enum Focusable {
  STAMINA = 'Stamina',
  TRUE = 'True',
  FALSE = 'False',
}

export enum Basic {
  BOAST = 'Boast',
  DISGUISE = 'Disguise',
  FOCUS = 'Focus',
  GRAPPLE = 'Grapple',
  HIDE = 'Hide',
  SCAN = 'Scan',
  CHEER = 'Cheer',
  SUPPORT = 'Support',
  HOPE = 'Hope',
  INSPIRE = 'Inspire',
  SCOUT = 'Scout',
  MIMIC = 'Mimic',
  PICKPOCKET = 'Pickpocket',
  SEAL = 'Seal',
  LULLABY = 'Lullaby',
  WARD = 'Ward',
  SACRIFICE = 'Sacrifice',
  PROTECT = 'Protect',
  MOCK = 'Mock',
  SEARCH = 'Search',
  STEAL = 'Steal',
  PROTECTION = 'Protection',
  LIGHT = 'Light',
  REFLECT = 'Reflect',
  RAGE = 'Rage',
  DISMISS = 'Dismiss',
}

// todo really what makes something a class skill is whether it can be earned via class? decouple

/**
 * Class Skills are motor programs that a character learns to preform.
 * Each skill can be acquired via items, etc. but often
 * progression is determined by class.
 */
export namespace BasicList {
  export type BasicType = {
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

  export const Boast: BasicType = {
    name: Basic.BOAST,
    description: 'increase party’s moral',
    effect: [],
  };

  export const Disguise: BasicType = {
    name: Basic.DISGUISE,
    description: 'Changes appearance and disables command menu until canceled.',
    effect: [],
    // stamina
  };

  export const Dismiss: BasicType = {
    name: Basic.DISMISS,
    description: 'Release a summon.',
    effect: [],
  };

  export const Focus: BasicType = {
    name: Basic.FOCUS,
    description: 'raise attack and attack percent for following move.',
    effect: [],
  };

  export const Grapple: BasicType = {
    name: Basic.GRAPPLE,
    description: 'Lowers character and opponents life.',
    effect: [],
  };

  export const Hide: BasicType = {
    name: Basic.HIDE,
    description: 'Enemy cannot see you',
    effect: [],
    // [stamina]
  };

  export const Scan: BasicType = {
    name: Basic.SCAN,
    description: 'Read enemies stats.',
    effect: [],
  };

  export const Cheer: BasicType = {
    name: Basic.CHEER,
    description: 'Targets Spirit increases by 10% for a duration',
    effect: [],
  };

  export const Support: BasicType = {
    name: Basic.SUPPORT,
    description: 'Read enemies stats.',
    effect: [],
  };

  export const Hope: BasicType = {
    name: Basic.HOPE,
    description: 'The most powerful status bonus',
    effect: [],
  };

  export const Inspire: BasicType = {
    name: Basic.INSPIRE,
    description: 'Increases target Drive gauge',
    effect: [],
  };

  export const Scout: BasicType = {
    name: Basic.SCOUT,
    description: 'Move ahead of party.',
    effect: [],
    // constantly consumes stamina
  };

  export const Mimic: BasicType = {
    name: Basic.MIMIC,
    description: 'Use the same move that was used on you on the enemy.',
    effect: [],
  };

  export const Pickpocket: BasicType = {
    name: Basic.PICKPOCKET,
    description: 'Steal from enemy.',
    effect: [],
    // cost [stamina]
  };

  export const Seal: BasicType = {
    name: Basic.SEAL,
    description: 'Keep enemies from getting close.', //hold an enemy off
    //  (Good for when party is powering up)
    effect: [],
  };

  export const Lullaby: BasicType = {
    name: Basic.LULLABY,
    description: 'Send enemies moves back at them',
    effect: [],
  };

  export const Ward: BasicType = {
    name: Basic.WARD,
    description: '"Keep enemies from getting close.',
    //  (Good for when party is powering up)
    effect: [],
  };

  export const Sacrifice: BasicType = {
    name: Basic.SACRIFICE,
    description: '',
    effect: [],
  };

  export const Protect: BasicType = {
    name: Basic.PROTECT,
    description: 'guard party members behind you.',
    // [stamina]
    effect: [],
  };

  export const Mock: BasicType = {
    name: Basic.MOCK,
    description: 'make a mocking action to cause Berserk on the opponent',
    // stamina]
    effect: [],
  };

  export const Search: BasicType = {
    name: Basic.SEARCH,
    description: 'scan nearby area for goods.',
    effect: [],
  };

  export const Steal: BasicType = {
    name: Basic.STEAL,
    description: 'Take item from opponent',
    // [stamina]
    effect: [],
  };

  export const Reflect: BasicType = {
    name: Basic.REFLECT,
    description: 'Send enemies moves back at them.',
    effect: [],
  };

  export const Protection: BasicType = {
    name: Basic.PROTECTION,
    description: 'Create a barrier around a ally',
    effect: [],
  };
  export const Light: BasicType = {
    name: Basic.LIGHT,
    description:
      'Keep enemies from moving for a duration of time. Chance Puts enemy to sleep. Stops rage',
    effect: [],
  };

  export const Rage: BasicType = {
    name: Basic.RAGE,
    description: 'Increase power decrease wisdom',
    effect: [],
  };

  // "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"
}
