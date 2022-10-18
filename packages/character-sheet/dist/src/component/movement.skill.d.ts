/**
 * MovementSkill
 * actions that are directly related to movement
 */
import { BaseSkill } from './base.skill';
export interface MovementSkill extends BaseSkill {
}
export declare class Walk implements MovementSkill {
    name: 'Walk';
    description: 'Move slowly forward or backward side to side';
}
export declare class Run implements MovementSkill {
    name: 'Run';
    description: 'Move quickly using stamina';
}
export declare class Swim implements MovementSkill {
    name: 'Swim';
    description: 'Move in deep water';
}
export declare class BackFlip implements MovementSkill {
    name: 'Back Flip';
    description: 'Quickly move backwards';
}
export declare class DoubleBackFlip implements MovementSkill {
    name: 'Double Back Flip';
    description: 'Quickly move backwards twice';
}
export declare class HighJump implements MovementSkill {
    name: 'High Jump';
    description: 'Charged vertical jump';
}
export declare class Climb implements MovementSkill {
    name: 'Climb';
    description: 'Scale a wall';
}
