// Todo move to another service, do not use DTO

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
   
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    private _userId: number;

    @Column()
    private _username: string;

    @CreateDateColumn()
    private LastLogonDate: Date;

    @CreateDateColumn()
    private createdAt: Date;
        
    @UpdateDateColumn()
    private updatedAt: Date;
}