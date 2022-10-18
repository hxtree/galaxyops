/**
 * InteractionSkills are actions that can only be used when a compatable object is present
 */
import { BaseSkill } from './base.skill';
export declare enum InteractionSkillList {
    GRAB = "Grab",
    PUSH = "Push",
    PULL = "Pull",
    LIFT = "Lift",
    THROW = "Throw"
}
export interface InteractionSkill extends BaseSkill {
    name: InteractionSkillList;
}
export declare enum ObjectCategory {
    MOVEABLE = "Moveable",
    IMPENDING = "Impending"
}
export declare class Grab implements InteractionSkill {
    name: InteractionSkillList.GRAB;
    description: 'Grab object';
    target: ObjectCategory.MOVEABLE;
}
export declare class Push implements InteractionSkill {
    name: InteractionSkillList.PUSH;
    description: 'Push object';
    target: ObjectCategory.MOVEABLE;
}
export declare class Pull implements InteractionSkill {
    name: InteractionSkillList.PULL;
    description: 'Pull object';
    target: ObjectCategory.MOVEABLE;
}
export declare class Lift implements InteractionSkill {
    name: InteractionSkillList.LIFT;
    description: 'Lift object';
    target: ObjectCategory.MOVEABLE;
}
export declare class Throw implements InteractionSkill {
    name: InteractionSkillList.THROW;
    description: 'Throw object';
    target: ObjectCategory.MOVEABLE;
}
