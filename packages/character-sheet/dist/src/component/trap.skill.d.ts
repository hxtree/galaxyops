import { MenuSlot } from '../character/MenuSlot';
import { BaseSkill, SkillCategory } from './base.skill';
/**
 * Trap Skill
 * set a trap that will go off when the tile is stood on.
 */
export declare enum TrapSkillList {
    POISON_TRAP = "Poison Trap",
    EXPLOSIVE_TRAP = "Explosive Trap",
    TIME_BOMB_TRAP = "Time Bomb Trap",
    CALTROPS_TRAP = "Caltrops Trap",
    DISABLE_TRAP = "Disable Trap"
}
export declare abstract class TrapSkill implements BaseSkill {
    abstract name: TrapSkillList;
    abstract description: string;
    menuSlot: MenuSlot.Fourth;
    category: SkillCategory.CLASS;
}
export declare class PoisonTrap extends TrapSkill {
    name: TrapSkillList.POISON_TRAP;
    description: 'Set a poison trap';
}
export declare class ExplosiveTrap extends TrapSkill {
    name: TrapSkillList.EXPLOSIVE_TRAP;
    description: 'Set a explosive trap';
}
export declare class TimeBombTrap extends TrapSkill {
    name: TrapSkillList.TIME_BOMB_TRAP;
    description: 'Set a time based trap';
}
export declare class CaltropsTrap extends TrapSkill {
    name: TrapSkillList.CALTROPS_TRAP;
    description: 'Set a trap of spiked caltrops';
}
export declare class DisableTrap extends TrapSkill {
    name: TrapSkillList.DISABLE_TRAP;
    description: 'Disable a set trap';
}
