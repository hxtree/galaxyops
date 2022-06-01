import { Thing } from "./Thing";
import { Gauge } from "../Gauge";
import { Action } from "../actions/Action";
import { Trait } from "../Trait";


// there could be a million of the same character in  the database, one for each player instance of the game.
// how to segrate them?
// how to keep track of them?

export abstract class Character extends Thing { 

    private characterId: string;
    
    private _age: number;
    
    private _experience: number;
    
    private life: Gauge;
    private spirit: Gauge;
    private drive: Gauge;

    private classes: Array<string>;
    private inventory: Array<Thing>;
    private actions: Array<Action>;
        
    private speed: number;

    private power: number;

    /** 
     * The quality of having experience, knowledge, and good judgment.
     */
    private wisdom: number;

    /**
     * The ability to think and reason logically.
     */
    private intelligence: number;

    /** 
     * The ability to protect and defend oneself.
     */
    private defense: number;

    /** 
     * The ability to hit and injure others.
     */
    private accuracy: number;

    /** 
     * The ability to avoid and evade attacks.
     */
    private evasion: number;

    /** 
     * The ability to have a favorable outcome.
     */
    private luck: number;
    
    private traits: Array<Trait>;

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }

    public get experience(): number {
        return this._experience;
    }

    public set experience(experience: number) {
        this._experience = experience;
    }

    public get level(): number {
        return Math.floor(Math.sqrt(this._experience / 100));
    }

    public get nextLevel(): number {
        return (this._experience - (this.level * (this.level - 1) / 2) * 100);
    }

    public get experienceToNextLevel(): number {
        return this.nextLevel - this.experience;
    }

    public get experienceToNextLevelPercentage(): number {
        return this.experienceToNextLevel / this.nextLevel;
    }
}