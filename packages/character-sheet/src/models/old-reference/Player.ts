import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";
   
@Entity()
export class Player {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    userId: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}