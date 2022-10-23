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
export declare enum SkillCategory {
    MOVEMENT = "Movement",
    MENU = "Menu",
    COMBO = "Combo",
    INTERACTION = "Interaction",
    WEAPON = "Weapon",
    CLASS = "Class",
    DRIVE = "Drive",
    PARTY = "Party",
    GEAR = "Gear",
    NATURAL = "Natural"
}
