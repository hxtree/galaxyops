import {Entity, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, Column} from 'typeorm';
import {Item } from './Item';

@Entity()
export abstract class Equipment extends {

    @PrimaryGeneratedColumn()
    protected id: string;
    
    @ManyToOne(() => Character, (character) => character.equipment)
    character: Character;

    @OneToMany(() => Item, (item) => item.equipment) // note: we will create author property in the Photo class below
    item: Item

    @Column()
    protected _gearSlot: string;

}