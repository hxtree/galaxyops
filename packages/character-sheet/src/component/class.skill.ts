import {EffectTable} from './table.effect';
import {MenuSlot} from './menu-slot';
import {BaseSkill} from './base.skill';

// fuel?
// Whether when performing move if character can hold action to put more effort into action
export enum Focusable {
  STAMINA = 'Stamina',
  TRUE = 'True',
  FALSE = 'False',
}

export enum ClassSkillList {
  BARRIER = 'Barrier',
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
export abstract class ClassSkill implements BaseSkill {
  abstract name: string;
  abstract description: string;
  abstract effect: EffectTable;
  menuSlot: MenuSlot.First;
}

export class Barrier extends ClassSkill {
  name: ClassSkillList.BARRIER;
  description: '';
  effect: [];
}

export class Boast extends ClassSkill {
  name: ClassSkillList.BOAST;
  description: 'increase party’s moral';
  effect: [];
}

export class Disguise extends ClassSkill {
  name: ClassSkillList.DISGUISE;
  description: 'Changes appearance and disables command menu until canceled.';
  effect: [];
  // stamina
}

export class Dismiss extends ClassSkill {
  name: ClassSkillList.DISMISS;
  description: 'Release a summon.';
  effect: [];
}

export class Focus extends ClassSkill {
  name: ClassSkillList.FOCUS;
  description: 'raise attack and attack percent for following move.';
  effect: [];
}

export class Grapple extends ClassSkill {
  name: ClassSkillList.GRAPPLE;
  description: 'Lowers character and opponents life.';
  effect: [];
}

export class Hide extends ClassSkill {
  name: ClassSkillList.HIDE;
  description: 'Enemy cannot see you';
  effect: [];
  // [stamina]
}

export class Scan extends ClassSkill {
  name: ClassSkillList.SCAN;
  description: 'Read enemies stats.';
  effect: [];
}

export class Cheer extends ClassSkill {
  name: ClassSkillList.CHEER;
  description: 'Targets Spirit increases by 10% for a duration';
  effect: [];
}

export class Support extends ClassSkill {
  name: ClassSkillList.SUPPORT;
  description: 'Read enemies stats.';
  effect: [];
}

export class Hope extends ClassSkill {
  name: ClassSkillList.HOPE;
  description: 'The most powerful status bonus';
  effect: [];
}

export class Inspire extends ClassSkill {
  name: ClassSkillList.INSPIRE;
  description: 'Increases target Drive gauge';
  effect: [];
}

export class Scout extends ClassSkill {
  name: ClassSkillList.SCOUT;
  description: 'Move ahead of party.';
  effect: [];
  // constantly consumes stamina
}

export class Mimic extends ClassSkill {
  name: ClassSkillList.MIMIC;
  description: 'Use the same move that was used on you on the enemy.';
  effect: [];
}

export class Pickpocket extends ClassSkill {
  name: ClassSkillList.PICKPOCKET;
  description: 'Steal from enemy.';
  effect: [];
  // cost [stamina]
}

export class Seal extends ClassSkill {
  name: ClassSkillList.SEAL;
  description: 'Keep enemies from getting close.'; //hold an enemy off
  //  (Good for when party is powering up)
  effect: [];
}

export class Lullaby extends ClassSkill {
  name: ClassSkillList.LULLABY;
  description: 'Send enemies moves back at them';
  effect: [];
}

export class Ward extends ClassSkill {
  name: ClassSkillList.WARD;
  description: '"Keep enemies from getting close.';
  //  (Good for when party is powering up)
  effect: [];
}

export class Sacrifice extends ClassSkill {
  name: ClassSkillList.SACRIFICE;
  description: '';
  effect: [];
}

export class Protect extends ClassSkill {
  name: ClassSkillList.PROTECT;
  description: 'guard party members behind you.';
  // [stamina]
  effect: [];
}

export class Mock extends ClassSkill {
  name: ClassSkillList.MOCK;
  description: 'make a mocking action to cause Berserk on the opponent';
  // stamina]
  effect: [];
}

export class Search extends ClassSkill {
  name: ClassSkillList.SEARCH;
  description: 'scan nearby area for goods.';
  effect: [];
}

export class Steal extends ClassSkill {
  name: ClassSkillList.STEAL;
  description: 'Take item from opponent';
  // [stamina]
  effect: [];
}

export class Reflect extends ClassSkill {
  name: ClassSkillList.REFLECT;
  description: 'Send enemies moves back at them.';
  effect: [];
}

export class Protection extends ClassSkill {
  name: ClassSkillList.PROTECTION;
  description: 'Create a barrier around a ally';
  effect: [];
}
export class Light extends ClassSkill {
  name: ClassSkillList.LIGHT;
  description: 'Keep enemies from moving for a duration of time. Chance Puts enemy to sleep. Stops rage';
  effect: [];
}

export class Rage extends ClassSkill {
  name: ClassSkillList.RAGE;
  description: 'Increase power decrease wisdom';
  effect: [];
}

// "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"
