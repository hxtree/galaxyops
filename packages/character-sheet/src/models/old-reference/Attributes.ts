import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import {CharacterSheet} from './CharacterSheet';
import {Gauge} from '../WIP/Gauge';

/*
 * Attributes are the primary way to describe a character's **last known state**.
 * Gauge attributes such as Life, Spirit, and Drive have a current value and a maximum value.
 * The maximum value may be exceeded, but the current value cannot be negative.
 * The current value is variable, and may be modified by actions.
 * The maximum value is fixed, and cannot be modified by actions. Instead it is computed from the
 * character's discipline, the character's level, and the character's equipment.
 * https://en.wikipedia.org/wiki/Attribute_(role-playing_games)
 */
@Entity()
export class Attributes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => CharacterSheet)
  @JoinColumn()
  @Column({unique: true})
  characterSheetId: number;

  // A measurement of ones ability to hold spirit to physical plain
  @Column()
  life: Gauge;

  // A measurement of ones spiritual ability
  @Column()
  spirit: Gauge;

  // A gauge of  ability to do special skills
  @Column()
  drive: Gauge;

  // The ability to apply force to ones movements
  @Column()
  power: number;

  // The ability to move quickly
  @Column()
  speed: number;

  // The quality of having experience, knowledge, and good judgment.
  @Column()
  wisdom: number;

  // The ability to think and reason logically.
  @Column()
  intelligence: number;

  // The ability to protect and defend oneself.
  @Column()
  defense: number;

  // The ability to hit and injure others.
  @Column()
  accuracy: number;

  // The ability to avoid and evade attacks.
  @Column()
  evasion: number;

  // The ability to have a favorable outcome.
  @Column()
  luck: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
