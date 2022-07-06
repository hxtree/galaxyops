import {Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column} from 'typeorm';
import { Item } from './Item';
import { Character } from './Character';

@Entity()
export abstract class Equipment {

    @PrimaryGeneratedColumn()
    protected id: string;
    
    @ManyToOne(() => Character, (character) => character.equipment)
    character: Character;

    @Column()
    protected item: Item

    @Column()
    protected _gearSlot: string;

    @Column()
    protected lastUpdated: Date;
}