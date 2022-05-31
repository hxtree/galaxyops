import { Thing } from "./Thing";
import { Gauge } from "../Gauge";
import { Action } from "../actions/Action";
import { Trait } from "../Trait";


// there could be a million of the same character in  the database, one for each player instance of the game.
// how to segrate them?
// how to keep track of them?

export abstract class Character extends Thing { 

    private characterId: string;
    
    private age: Number;
    
    private experience: Number;
    
    private life: Gauge;
    private spirit: Gauge;
    private drive: Gauge;

    private classes: Array<string>;
    private inventory: Array<Thing>;
    private actions: Array<Action>;
        
    private speed: Number;

    private power: Number;

    /** 
     * The quality of having experience, knowledge, and good judgment.
     */
    private wisdom: Number;

    /**
     * The ability to think and reason logically.
     */
    private intelligence: Number;

    /** 
     * The ability to protect and defend oneself.
     */
    private defense: Number;

    /** 
     * The ability to hit and injure others.
     */
    private accuracy: Number;

    /** 
     * The ability to avoid and evade attacks.
     */
    private evasion: Number;

    /** 
     * The ability to have a favorable outcome.
     */
    private luck: Number;
    
    private traits: Array<Trait>;
}
