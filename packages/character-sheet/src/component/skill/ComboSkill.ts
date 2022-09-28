import {MenuSlot} from '../character/MenuSlot';
import {BaseSkill} from './BaseSkill';
import {Slash, WeaponSkill} from './WeaponSkill';

export enum ComboSkillList {
  BLITZ = 'Blitz',
}

export abstract class ComboSkill implements BaseSkill {
  abstract name: string;
  abstract description: string;
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

  menuSlot: MenuSlot.First;
}

export class Blitz extends ComboSkill {
  name: ComboSkillList.BLITZ;
  description: '';
  prerequisite: [Slash, Slash, Slash];
}
