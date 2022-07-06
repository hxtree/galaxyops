import {Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, Column} from 'typeorm';
   
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
    id: string;
    
    @OneToMany(() => Trait, (trait) => trait.character)
    traits: Array<Trait>;

    @OneToOne(() => Attributes)
    @JoinColumn()
    attributes: Attributes;

    @OneToMany(() => Equipment, (equipment) => equipment.character)
    private _equipment: Equipment[]

    @OneToMany(() => Discipline, (discipline) => discipline.character)
    public _disciplines: Array<Discipline>;


    private _actions: Array<Action>;

    private _equipmentSlots = ['head','neck', 'chest', 'hands', 'waist', 'legs', 'feet'];

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

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