import { Attribute } from '../attribute';
/**
 * MovementSkill
 * actions that are directly related to movement
 */
export declare enum Movement {
    WALK = "Walk",
    RUN = "Run",
    SWIM = "Swim",
    BACK_FLIP = "Back Flip",
    DOUBLE_BACK_FLIP = "Double Back Flip",
    HIGH_JUMP = "High Jump",
    CLIMB = "Climb"
}
export declare namespace MovementSkill {
    type MovementType = {
        name: string;
        description: string;
        consumes?: Attribute;
    };
    const Walk: MovementType;
    const Run: MovementType;
    const Swim: MovementType;
    const BackFlip: MovementType;
    const DoubleBackFlip: MovementType;
    const HighJump: MovementType;
    const Climb: MovementType;
}
