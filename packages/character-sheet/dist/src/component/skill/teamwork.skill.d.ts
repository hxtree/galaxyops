/**
 * Teamwork Skill
 * Actions that involve multiple Player characters interacting to perform an action.
 */
export declare enum Teamwork {
    COMMAND = "Command",
    FORMATIONS = "Formations",
    ORDER = "Order"
}
export declare namespace Teamwork {
    type TeamworkType = {
        name: string;
        description: string;
    };
    const Command: TeamworkType;
    const Formations: TeamworkType;
    const Order: TeamworkType;
}
