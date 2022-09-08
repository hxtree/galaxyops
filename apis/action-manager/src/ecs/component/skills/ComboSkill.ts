import {BaseSkill} from './BaseSkill';
import {Slash, WeaponSkill} from './WeaponSkill';

export enum ComboSkillList {
  'Blitz',
}

export interface ComboSkill extends BaseSkill {
  /**
   * Combo Skills use is revoked unless character action history matches exactly
   * prerequisite of prior skills
   * Once prerequisite is matched the combination activation button (Square by default)
   * can be pressed to activate the action
   *
   * If prerequestes is undefined, a player may customize a characters to set a custom
   * combo in order for quicker action selection.
   */
  prerequisite?: Array<WeaponSkill>; // todo figure our programmatic solution
}

export class Blitz implements ComboSkill {
  name: 'Blitz';
  description: '';
  prerequisite: [Slash, Slash, Slash];
}
