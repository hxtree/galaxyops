import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {Character} from './Character';
import {Discipline} from '../discipline/BaseDiscipline';

/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */
@Entity()
export class Experience {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Character, character => character.equipment)
  character: Character;

  @Column({
    type: 'enum',
    enum: Discipline,
  })
  discipline: Discipline;

  @Column()
  experience: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
