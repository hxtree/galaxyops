import {EffectTable} from '../effect/EffectTable';
import {MenuSlot} from '../character/MenuSlot';
import {BaseSkill} from './BaseSkill';

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
}

/**
 * Class Actions are motor programs that a character learns to preform.
 * Class Actions progression are often determined by determined by class.
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

// "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"

// Mimic – use the same move that was used on you on the enemy.
// Mock – [stamina] make a mocking action to cause Berserk on the opponent.
// Pickpocket – [stamina] steal from enemy
// Protect – [stamina] guard party members behind you.
// Sacrifice –
// Scan –.
// Scout – [stamina] move ahead of party.
// Seal – hold an enemy off.
// Search – scan nearby area for goods.
// Steal - [stamina] Take item from opponent

// "42","Craft","Combined multiple items into one.","39",,"39"
// "45","Reflect","Send enemies moves back at them.","44",,"44"
// "46","Lullaby","Send enemies moves back at them.","45",,"45"
// "47","Light","Keep enemies from moving for a duration of time.– chance Puts enemy to sleep. Stops rage","46",,"46"
// "48","Protection"," Create a barrier around a ally","47",,"47"

// "43","Ward","Keep enemies from getting close. (Good for when party is powering up)","42",,"42"
// "44","Seal","Keep enemies from getting close. (Good for when party is powering up)","43",,"43"
