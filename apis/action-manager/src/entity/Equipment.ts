import {Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { Item } from './Item';
import { Character } from './Character';

@Entity()
export abstract class Equipment {

    @PrimaryGeneratedColumn()
    id: string;
    
    @ManyToOne(() => Character, (character) => character.equipment)
    character: Character;

    @Column()
    item: Item

    @Column()
    gearSlot: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}