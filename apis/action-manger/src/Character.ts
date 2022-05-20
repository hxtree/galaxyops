import { Thing } from "./Thing";
import { Gauge } from "./Gauge";
import { Action } from "./actions/Action";


// there could be a million of the same character in  the database, one for each player instance of the game.
// how to segrate them?
// how to keep track of them?

export class Character extends Thing { 

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
    private wisdom: Number;
    private intelligence: Number;
    private defense: Number;
    private accuracy: Number;
    private evasion: Number;
    private luck: Number;
    
    private traits: Array<Trait>;
}
