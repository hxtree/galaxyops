import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
   
@Entity()
export class Inventory {

    @PrimaryGeneratedColumn()
    private _inventoryId: number;

    @Column()
    private _playerId: number;

    // where is the item, inventory, chest, bank, etc.
    @Column()
    private _placeId: number;

    @Column()
    private _itemId: number;

    @Column()
    private _quntity: number;

    @CreateDateColumn()
    private createdAt: Date;
        
    @UpdateDateColumn()
    private updatedAt: Date;
}