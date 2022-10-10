import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, UpdateDateColumn, CreateDateColumn } from "typeorm";

// an item is an object within the game world that can be collected by a player or non-player character. 
// an item is not an instance of a individual item.
// https://en.wikipedia.org/wiki/Item_(game_terminology)

@Entity()
export class Item { 

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    protected _category: string;
    
    @Column()
    private name: string;

    @Column()
    private description: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}
