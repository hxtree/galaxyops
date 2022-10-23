/**
 * InteractionSkills are actions that can only be used when a compatable object is present
 */
export declare enum Interaction {
    GRAB = "Grab",
    PUSH = "Push",
    PULL = "Pull",
    LIFT = "Lift",
    THROW = "Throw"
}
export declare namespace InteractionSkill {
    type InteractionType = {
        name: Interaction;
        description: string;
        target: ObjectCategory;
    };
    enum ObjectCategory {
        MOVEABLE = "Moveable",
        IMPENDING = "Impending"
    }
    const Grab: InteractionType;
    const Push: InteractionType;
    const Pull: InteractionType;
    const Lift: InteractionType;
    const Throw: InteractionType;
}
