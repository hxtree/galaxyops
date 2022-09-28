import {BaseSkill} from './BaseSkill';

export enum PassiveSkillList {
  DUAL_WELD = 'Dual Weld',
  ESCAPE_ARTIST = 'Escape Artist',
  INTIMIDATE = 'Intimidate',
  CONCENTRATION = 'Concentration',
  BLUFF = 'Bluff',
  SENSE_BLUFF = 'Sense Bluff',
  GREEDY_INTENT = 'Greedy Intent',
  SLOTH_COMPOSURE = 'Sloth Composure',
  BLOOD_LUST = 'Blood Lust',
  ENVIOUS_OF_COMBAT = 'Envious of Combat',
  GLUTTONOUS_DESIRE = 'Gluttonous Desire',
  CATCHER = 'Catcher',
}

/**
 * PassiveSkill are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
export interface PassiveSkill extends BaseSkill {}

export class DualWeld implements PassiveSkill {
  name: PassiveSkillList.DUAL_WELD;
  description: 'Can use two one handed weapons at once.';
  // " Both malace and penny can learn this.
}

export class EscapeArtist implements PassiveSkill {
  name: PassiveSkillList.ESCAPE_ARTIST;
  description: 'Makes it easier to run away from aggresive targets';
}

export class Intimidate implements PassiveSkill {
  name: PassiveSkillList.INTIMIDATE;
  description: 'Causes fear in enemy';
}

export class Concentration implements PassiveSkill {
  name: PassiveSkillList.CONCENTRATION;
  description: 'Stay focused';
}

export class Bluff implements PassiveSkill {
  name: PassiveSkillList.BLUFF;
  description: 'Tell a lie without being caught';
}

export class SenseBluff implements PassiveSkill {
  name: PassiveSkillList.SENSE_BLUFF;
  description: 'Detect if a lie is being told';
  // if character beats bluff check, a little icon on the screen will tell if someone is trying to bluff party
}

export class GreedyIntent implements PassiveSkill {
  name: PassiveSkillList.GREEDY_INTENT;
  description: 'Gain 5% more experience than party';
  // earned from defeating Greed
}

export class SlothComposure implements PassiveSkill {
  name: PassiveSkillList.SLOTH_COMPOSURE;
  description: 'Blows taken when not doing action are halved';
  // earned from defeating Lawzon
}

export class BloodLust implements PassiveSkill {
  name: PassiveSkillList.BLOOD_LUST;
  description: 'Speed in battle increased';
  // earned from defeating Lust
}

export class EnviousOfCombat implements PassiveSkill {
  name: PassiveSkillList.ENVIOUS_OF_COMBAT;
  description: 'Gain rage from watching combat';
  // earned from defeating Envy
}

export class GluttonousDesire implements PassiveSkill {
  name: PassiveSkillList.GLUTTONOUS_DESIRE;
  description: 'Comsumer food items twice as fast';
  // earned from defeating Glutony
}

export class Catcher implements PassiveSkill {
  name: PassiveSkillList.CATCHER;
  description: 'Receive bonus when catching items';
}
