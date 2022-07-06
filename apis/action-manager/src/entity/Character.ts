import {Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn} from 'typeorm';
   
import { Action } from "../WIP/contracts/Action";
import { Trait } from "./Trait";
import { Discipline } from "./Discipline";
import { Equipment } from "./Equipment";
import { Attributes } from "./Attributes";

/**
 * A character is a instance of a player or non-player
 */
 @Entity()
 export abstract class Character { 

    @PrimaryGeneratedColumn()
    private id: string;
    
    @OneToOne(() => Attributes)
    @JoinColumn()
    public attributes: Attributes;

    @OneToMany(() => Equipment, (equipment) => equipment.character)
    private _equipment: Equipment[]

    @OneToMany(() => Discipline, (discipline) => discipline.character)
    public _disciplines: Array<Discipline>;

    @OneToMany(() => Trait, (trait) => trait.character)
    public traits: Array<Trait>;

    private _actions: Array<Action>;


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