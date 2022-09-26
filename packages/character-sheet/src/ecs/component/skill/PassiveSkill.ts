import {BaseSkill} from './BaseSkill';

export enum PassiveSkillList {
  'Dual Weld',
  'Escape Artist',
  // todo add all
}

/**
 * PassiveSkill are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
export interface PassiveSkill extends BaseSkill {}

export class DualWeld implements PassiveSkill {
  name: 'Dual Weld';
  description: 'Can use two one handed weapons at once.';
  // " Both malace and penny can learn this.
}

export class EscapeArtist implements PassiveSkill {
  name: 'Escape Artist';
  description: 'Makes it easier to run away from aggresive targets';
}

export class Intimidate implements PassiveSkill {
  name: 'Intimidate';
  description: 'Causes fear in enemy';
}

export class Concentration implements PassiveSkill {
  name: 'Concentration';
  description: 'Stay focused';
}

export class Bluff implements PassiveSkill {
  name: 'Bluff';
  description: 'Tell a lie without being caught';
}

export class SenseBluff implements PassiveSkill {
  name: 'Sense Bluff';
  description: 'Detect if a lie is being told';
  // if character beats bluff check, a little icon on the screen will tell if someone is trying to bluff party
}

export class GreedyIntent implements PassiveSkill {
  name: 'Greedy Intent';
  description: 'Gain 5% more experience than party';
  // earned from defeating Greed
}

export class SlothComposure implements PassiveSkill {
  name: 'Sloth Composure';
  description: 'Blows taken when not doing action are halved';
  // earned from defeating Lawzon
}

export class BloodLust implements PassiveSkill {
  name: 'Blood Lust';
  description: 'Speed in battle increased';
  // earned from defeating Lust
}

export class EnviousOfCombat implements PassiveSkill {
  name: 'Envious of Combat';
  description: 'Gain rage from watching combat';
  // earned from defeating Envy
}

export class GluttonousDesire implements PassiveSkill {
  name: 'Gluttonous Desire';
  description: 'Comsumer food items twice as fast';
  // earned from defeating Glutony
}

export class Catcher implements PassiveSkill {
  name: 'Catcher';
  description: 'Receive bonus when catching items';
}
