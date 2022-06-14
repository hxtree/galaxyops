import { Thing } from "./Thing";
import { Gauge } from "../Gauge";
import { Action } from "./Action";
import { Trait } from "../Trait";
import { Disiplines } from "./Discipline";
import { Equipment } from "./Equipment";

/**
 * A character is a instance of a player or non-player
 */
export abstract class Character extends Thing { 

    // a character's unique identifier
    private characterId: string;
    
    // how long has the character been in existance
    private _age: number;
    
    private life: Gauge;
    private spirit: Gauge;
    private drive: Gauge;

    private _displines: Disiplines;
    private _inventory: Array<Thing>;
    private _actions: Array<Action>;

    // The ability to apply force to ones movements
    private _power: number;

    // The ability to move quickly
    private _speed: number;   

    // The quality of having experience, knowledge, and good judgment.
    private _wisdom: number;

    // The ability to think and reason logically.
    private _intelligence: number;
 
    // The ability to protect and defend oneself.
    private _defense: number;
 
    // The ability to hit and injure others.
    private _accuracy: number;
 
    // The ability to avoid and evade attacks.
    private _evasion: number;
 
    // The ability to have a favorable outcome.
    private luck: number;
     
    private traits: Array<Trait>;

    private _equipment: Array<Equipment>;

    private _equipmentSlots = ['head','neck', 'chest', 'hands', 'waist', 'legs', 'feet'];

    public get equipment(): Array<Equipment> {
        return this._equipment;
    }

    public get discipline(): Disiplines {
        return this._displines;
    }

    public set discipline(discipline: Disiplines) {
        this._displines = discipline;
    }

    public addEquipment(equipment: Equipment){
        this._equipment.push(equipment);
    }

    public removeEquipment(equipment: Equipment){
        this._equipment.splice(this._equipment.indexOf(equipment), 1);
    }

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }
   
    public get power(): number {
        return this._power;
    }

    public set power(power: number) {
        this._power = power;
    }

    public get speed(): number {
        return this._speed;
    }

    public set speed(speed: number) {
        this._speed = speed;
    }

    public get wisdom(): number {
        return this._wisdom;
    }

    public set wisdom(wisdom: number) {
        this._wisdom = wisdom;
    }
   
    public get intelligence(): number {
        return this._intelligence;
    }

    public set intelligence(intelligence: number) {
        this._intelligence = intelligence;
    }
    
     public get defense(): number {
        return this._defense;
    }

    public set defense(defense: number) {
        this._defense = defense;
    }

    public get accuracy(): number {
        return this._accuracy;
    }

    public set accuracy(accuracy: number) {
        this._accuracy = accuracy;
    }
   
    public get evasion(): number {
        return this._evasion;
    }

    public set evasion(evasion: number) {
        this._evasion = evasion;
    }
}