import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";
   
@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}