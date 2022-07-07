import { Gauge } from '../WIP/Gauge';
import { Thing } from '../WIP/contracts/Thing';
import { Character } from '../entity/Character';
import { Attribute } from '../WIP/Attribute';
import { Effects } from '../WIP/Effects';

type Factor = [Attribute, number, string, string];
type Trait = Factor;

export enum ActionCategory {
    MOVEMENT = 'Movement', // changes position
    MENU = 'Menu', // activated via menu
    COMBO = 'Combo', // activated via combo
    INTERACTION = 'Interaction',
    WEAPON = 'Weapon',
    CLASS = 'Class',
    DRIVE = 'Drive',
    PARTY = 'Party',
    GEAR = 'Gear', // are related to the use of gear
    NATURAL = 'Natural', //  actions that do not need to be called to be used
}

export abstract class BaseAction {
    
    protected abstract _id: number;
    protected abstract _name: string;
    protected abstract _description: string;
    protected abstract _category: ActionCategory;
    
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
