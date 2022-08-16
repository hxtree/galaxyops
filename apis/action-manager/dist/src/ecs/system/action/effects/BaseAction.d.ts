import { Thing } from '../WIP/contracts/Thing';
import { Character } from '../entity/Character';
import { Effects } from '../WIP/Effects';
export declare enum ActionCategory {
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
/**
 * Actions are decoupled from the actor and target.
 * Each action SHOULD scale in computation based on actors and target stats.
 * Two vastly different skilled actors performing the same action may foresably yield vastly different effects.
 */
export declare abstract class BaseAction {
    protected abstract _id: number;
    protected abstract _name: string;
    protected abstract _description: string;
    protected abstract _category: ActionCategory;
    protected _actors: Array<Character>;
    protected _targets: Array<Character>;
    constructor(actors: Array<Character>, targets: Array<Character>);
    abstract execute(actors: Array<Thing>, targets: Array<Thing>): Effects;
    get name(): string;
    get description(): string;
    /**
     * The time spent before an action can be taken.
     * Being in the act of preparing may change one's defense, etc.
     * Before a prepareTime a character must be idle.
     */
    abstract get perpareTime(): number;
    /**
     * the amount of time an action takes to execute
     */
    abstract get executionTime(): number;
    /**
     * The recovery stage represents the time spent to recover from an action.
     * Recovery stage may vary greatly depending on the nature of the actions.
     * Some actions may cause immoblization, etc. during the recovery stage.
     * Others may simply prevent reuse for a duration.
     * Recoveries may stack and these stacks may have have physiclogical symptoms,
     * such as afflictions, but often are not visible.
     * After a recovery time the character returns to a idle state.
     */
    abstract get recoveryTime(): number;
    /**
    * the amount of time before the action can be executed again
    */
    abstract get cooldownTime(): number;
    /**
     * Every action can be represented by the time it takes to peform various stages of the action.
     * Although it's possble the time to perform an action is null, most user based action will take time to perform.
     * Each stage may be a different method depending on the action.
     * The duration and effects change character to character.
     */
    get totalDuration(): number;
}
