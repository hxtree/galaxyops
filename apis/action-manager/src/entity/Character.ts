import {Entity, PrimaryGeneratedColumn} from 'typeorm';
   
import { Thing } from "../WIP/contracts/Thing";
import { Gauge } from "../WIP/Gauge";
import { Action } from "../WIP/contracts/Action";
import { Trait } from "../WIP/Trait";
import { Disipline } from "../WIP/contracts/Discipline";
import { Equipment } from "../WIP/contracts/Equipment";
import { CharacterStats } from "./CharacterStats";

/**
 * A character is a instance of a player or non-player
 */

 @Entity()
 export abstract class Character extends Thing { 

    // a character's unique identifier
    @PrimaryGeneratedColumn()
    private characterId: string;

    
    private _inventory: Array<Thing>;
    private _actions: Array<Action>;

    public stats: CharacterStats;

    public displines: Array<Disipline>;

    private traits: Array<Trait>;

    private _equipment: Array<Equipment>;

    private _equipmentSlots = ['head','neck', 'chest', 'hands', 'waist', 'legs', 'feet'];
   
    public get equipment(): Array<Equipment> {
        return this._equipment;
    }

    public addEquipment(equipment: Equipment){
        this._equipment.push(equipment);
    }

    public removeEquipment(equipment: Equipment){
        this._equipment.splice(this._equipment.indexOf(equipment), 1);
    }

}