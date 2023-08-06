import { Drive } from './drive.skill';
import { Item } from './item.skill';
import { Spell } from './spell.skill';
import { Tool } from './tool.skill';
import { Weapon } from './weapon.skill';
import { Movement } from './movement.skill';
import { Passive } from './passive.skill';
import { Teamwork } from './teamwork.skill';
import { Summon } from './summon.skill';
import { Trap } from './trap.skill';
import { Basic } from './basic.skill';
import { Interaction } from './interaction.skill';

/**
 * Skills are decoupled from the actor and target.
 * Skills refer to abilities that assigned to characters.
 * Each action SHOULD scale in computation based on actors and target stats.
 * Two vastly different skilled actors performing the same action
 * may foreseeable yield vastly different effects.
 */
export const Skill = {
  ...Drive,
  ...Item,
  ...Spell,
  ...Tool,
  ...Weapon,
  ...Movement,
  ...Passive,
  ...Teamwork,
  ...Summon,
  ...Trap,
  ...Basic,
  ...Interaction,
};

export type SkillType =
  | Basic.Type
  | Drive.Type
  | Item.Type
  | Tool.Type
  | Movement.Type
  | Passive.Type
  | Spell.Type
  | Weapon.Type
  | Summon.Type
  | Teamwork.Type
  | Trap.Type;

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
