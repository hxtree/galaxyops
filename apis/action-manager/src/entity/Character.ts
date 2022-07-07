import {Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, Column} from 'typeorm';
   
import { Action } from "../actions/BaseAction";
import { Trait } from "./Trait";
import { Experience } from "./Experience";
import { Equipment } from "./Equipment";
import { Attributes } from "./Attributes";

/**
 * A character is a instance of a player or non-player
 */
 @Entity()
 export abstract class Character { 

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @OneToMany(() => Trait, (trait) => trait.character)
    traits: Array<Trait>;

    @OneToOne(() => Attributes)
    @JoinColumn()
    attributes: Attributes;

    @OneToMany(() => Experience, (experience) => experience.character)
    experiences: Array<Experience>;

    @OneToMany(() => Equipment, (equipment) => equipment.character)
    equipment: Equipment[]

    private _actions: Array<Action>;

    private _equipmentSlots = ['head','neck', 'chest', 'hands', 'waist', 'legs', 'feet'];

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    public addEquipment(equipment: Equipment){
        this.equipment.push(equipment);
    }

    public removeEquipment(equipment: Equipment){
        this.equipment.splice(this.equipment.indexOf(equipment), 1);
    }
}