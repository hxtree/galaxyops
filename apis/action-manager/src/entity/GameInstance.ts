import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * A instance is a record of a game engine instance
 */
@Entity()
export class GameInstance {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    playerID: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}