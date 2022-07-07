import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
   
// 
@Entity()
export class Inventory {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    private _playerId: number;

    // where is the item, bank, chest, etc.
    @Column()
    private _placeId: number;

    @Column()
    private _itemId: number;

    @Column()
    private _quntity: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}