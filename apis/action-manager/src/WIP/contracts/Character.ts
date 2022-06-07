import { Thing } from "./Thing";
import { Gauge } from "../Gauge";
import { Action } from "./Action";
import { Trait } from "../Trait";
import { Disiplines } from "./Discipline";
import { Equipment } from "./Equipment";

// there could be a million of the same character in  the database, one for each player instance of the game.
// how to segrate them?
// how to keep track of them?

export abstract class Character extends Thing { 

    private characterId: string;
    
    private _age: number;
    
    private life: Gauge;
    private spirit: Gauge;
    private drive: Gauge;

    private _displines: Disiplines;
    private _inventory: Array<Thing>;
    private _actions: Array<Action>;
        
    private _speed: number;
    
    private power: number;

    private _equipment: Array<Equipment>;

    private _equipmentSlots = ['head','neck', 'chest', 'hands', 'waist', 'legs', 'feet'];

    public addEquipment(equipment: Equipment){
        this._equipment.push(equipment);
    }

    public removeEquipment(equipment: Equipment){
        this._equipment.splice(this._equipment.indexOf(equipment), 1);
    }

    public get equipment(): Array<Equipment> {
        return this._equipment;
    }

    public get discipline(): Disiplines {
        return this._displines;
    }

    public set discipline(discipline: Disiplines) {
        this._displines = discipline;
    }

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

    public get speed(): number {
        return this._speed;
    }

    public set speed(speed: number) {
        this._speed = speed;
    }
}