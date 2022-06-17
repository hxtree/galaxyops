import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
   
@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    private _playerId;


}