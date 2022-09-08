// Some tags can be automatically added, like LIFE_DECREASE IF attack decreases life.

import {Attribute} from '../character/Attribute';
import {ClassSkillList} from './ClassSkill';
import {ComboSkillList} from './ComboSkill';
import {DriveSkillList} from './DriveSkill';
import {InteractionSkillList} from './InteractionSkill';
import {ItemSkillList} from './ItemSkill';
import {PassiveSkillList} from './PassiveSkill';
import {SpellSkillList} from './SpellSkill';
import {TeamworkSkillList} from './TeamworkSkill';
import {TrapSkillList} from './TrapSkill';
import {WeaponSkillList} from './WeaponSkill';

// Is this more of a system then a component?
export enum SkillCategory {
  MOVEMENT = 'Movement', // changes position
  MENU = 'Menu', // activated via menu
  COMBO = 'Combo', // activated via combo
  INTERACTION = 'Interaction', // in relation to object
  WEAPON = 'Weapon',
  CLASS = 'Class',
  DRIVE = 'Drive',
  PARTY = 'Party',
  GEAR = 'Gear', // are related to the use of gear
  NATURAL = 'Natural', //  actions that do not need to be called to be used ??? These sound like traits or something?
}

const MasterSkillList = {
  ...WeaponSkillList,
  ...TrapSkillList,
  ...ClassSkillList,
  ...DriveSkillList,
  ...ComboSkillList,
  ...SpellSkillList,
  ...TeamworkSkillList,
  ...PassiveSkillList,
  ...ItemSkillList,
  ...InteractionSkillList,
};
export type MasterSkillListType = typeof MasterSkillList;

export interface BaseSkill {
  name: string;
  description: string;

  /**
   * Fixed Action A action that must be canceled or will not stop being used
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
}

// TargetEffect.Action.Catch.Add(5);
// TargetEffect.Attribute.Power.Add(5%);
// // tags

// TargetEffect.Attribute.Life.Remove('10d8');
// TargetEffect.StatusEffect.Remove(Dizzy);
