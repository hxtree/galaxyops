import {Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn} from 'typeorm';
   
import { Thing } from "../WIP/contracts/Thing";
import { Gauge } from "../WIP/Gauge";
import { Action } from "../WIP/contracts/Action";
import { Trait } from "../WIP/Trait";
import { Disipline } from "../WIP/contracts/Discipline";
import { Equipment } from "../WIP/contracts/Equipment";
import { Attributes } from "./Attributes";
import { Inventory } from './Inventory';
/**
 * A character is a instance of a player or non-player
 */

 @Entity()
 export abstract class Character extends Thing { 

    @PrimaryGeneratedColumn()
    private id: string;
    
    @OneToOne(() => Attributes)
    @JoinColumn()
    public attributes: Attributes;

    @OneToMany(() => Inventory, (inventory) => inventory.character)
    private _inventory: Inventory[]

    private _actions: Array<Action>;

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