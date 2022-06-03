import { Gauge } from '../Gauge';
import { Thing } from '../character/Thing';
import { Character } from '../character/Character';
import { Attribute } from '../Attribute';
import { Effects } from '../Effects';

type Factor = [Attribute, number, string, string];
type Trait = Factor;

// Movement Actions
// Menu Actions
// Combo Actions
// nteration Actions
// Weapon Actions
// Class Actions
// Drive Actions
// Party Action: 
// Gear actions: are related to the use of gear
// Natural Actions: actions that do not need to be called to be used


export abstract class Action {
    
    protected abstract _id: number;
    protected abstract _name: string;
    protected abstract _description: string;
    
    protected _actors: Array<Character>;    
    protected _targets: Array<Character>;

    constructor(actors: Array<Character>, targets: Array<Character>) {
        this._actors = actors;
        this._targets = targets;
    }

    abstract execute(actors: Array<Thing>, targets: Array<Thing>): Effects;

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    // interupts?
    // should these be actual Date times?

    /** 
     * the amount of time before an action can be executed
     */
    abstract get waitTime() : number;

    /**
     * the amount of time an action takes to execute
     */
    abstract get executionTime() : number;

    /**
     * the amount of time before an action can be executed again
     */
    abstract get recoveryTime() : number;

     /**
     * the amount of time before the action can be executed again
     */
    abstract get cooldownTime() : number;
}
