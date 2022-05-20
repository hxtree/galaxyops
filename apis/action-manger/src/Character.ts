import { Thing } from "./Thing";
import { Gauge } from "./Gauge";
import { Action } from "./actions/Action";

export class Character extends Thing { 
    
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
