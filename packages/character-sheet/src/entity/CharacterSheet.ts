import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';
import {Experience} from './Experience';
import {Equipment} from './Equipment';
import {Trait} from './Trait';
import {Attributes} from './Attributes';

@Entity()
/**
 * Contains the latest known instance of a player or non-player character
 */
export class CharacterSheet {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  /**
   * base character information not stored in database
   * contains potentialGeatSlots, potentialDisciplines, etc.
   */
  @Column()
  archetype: string;

  @OneToMany(() => Trait, trait => trait.character)
  traits: Array<Trait>;

  @OneToOne(() => Attributes)
  @JoinColumn()
  attributes: Attributes;

  @OneToMany(() => Experience, experience => experience.characterSheet)
  experiences: Experience[];

  @OneToMany(() => Equipment, equipment => equipment.character)
  equipment: Equipment[];

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  /**
   * characters actual stats vary based on disciplines, afflictions, and equipment
   * the values actually stored in the database are the raw stats
   */
  getStats() {}

  /**
   * skills are determined based on disciplines, afflictions, and equipment
   * they are not correlated to character
   */
  getSkills() {}

  public addEquipment(equipment: Equipment) {
    this.equipment.push(equipment);
  }

  public removeEquipment(equipment: Equipment) {
    this.equipment.splice(this.equipment.indexOf(equipment), 1);
  }
}
