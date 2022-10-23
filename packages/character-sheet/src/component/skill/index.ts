/**
 * Skills are decoupled from the actor and target.
 * Skills refer to abilities that assigned to characters.
 */
export * from './basic.skill';
export * from './drive.skill';
export * from './item.skill';
export * from './spell.skill';
export * from './tool.skill';
export * from './weapon.skill';
export * from './movement.skill';
export * from './passive.skill';
export * from './teamwork.skill';
export * from './summon.skill';
export * from './trap.skill';

// Is this more of a system than a component?
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

// const MasterSkillList = {
//   ...WeaponSkillList,
//   ...TrapSkillList,
//   ...ClassSkillList,
//   ...DriveSkillList,
//   ...ComboSkillList,
//   ...SpellSkillList,
//   ...TeamworkSkillList,
//   ...PassiveSkillList,
//   ...ItemSkillList,
//   ...InteractionSkillList,
//   ...ToolSkillList,
//   ...Summon,
// };
// export type MasterSkillListType = typeof MasterSkillList;
