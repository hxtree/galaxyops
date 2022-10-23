export declare enum Trap {
    POISON_TRAP = "Poison Trap",
    EXPLOSIVE_TRAP = "Explosive Trap",
    TIME_BOMB_TRAP = "Time Bomb Trap",
    CALTROPS_TRAP = "Caltrops Trap",
    DISABLE_TRAP = "Disable Trap"
}
/**
 * Trap Skill
 * set a trap that will go off when the tile is stood on.
 */
export declare namespace Trap {
    type TrapType = {
        name: Trap;
        description: string;
    };
    const PoisonTrap: TrapType;
    const ExplosiveTrap: TrapType;
    const TimeBombTrap: TrapType;
    const CaltropsTrap: TrapType;
    const DisableTrap: TrapType;
}
