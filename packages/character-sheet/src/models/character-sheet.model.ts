import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Trait } from '../data/trait';
import { Discipline } from '../data/discipline';
import { Drive, Life, Spirit } from '../data/gauges';
import * as Gear from '../data/gear';
import { StatusEffect } from '../data/status.effect';

/**
 * A human or non-humanoid instance of a character archetype
 */

// interface representing a document
export interface ICharacterSheet {
  id: typeof uuidv4;
  archetype: string;
  traits: Trait[];
  attributes: {
    life: Life;
    spirit: Spirit;
    drive: Drive;
    power: number;
    speed: number;
    wisdom: number;
    intelligence: number;
    defense: number;
    accuracy: number;
    evasion: number;
    luck: number;
  };
  statusEffects?: StatusEffect[];
  token?: Gear.Token;
  experiences: { discipline: Discipline.Type; experience: number }[];
  equipment: { gearSlot: Gear.Slot; equipment: Gear.Equipment }[];
  updatedAt: Date;
  createdAt: Date;
}

// Schema for document interface
export const characterSheetSchema = new Schema<ICharacterSheet>({
  id: {
    type: String,
    required: true,
  },
  archetype: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 255,
  },
  traits: {
    type: [],
    required: true,
  },
  attributes: {
    type: [],
    required: true,
  },
  experiences: {
    type: [],
    required: true,
  },
  equipment: {
    type: [],
    required: true,
  },
  updatedAt: {
    Date,
  },
  createdAt: {
    Date,
  },
});

// Model.
export const CharacterSheet = model<ICharacterSheet>(
  'CharacterSheet',
  characterSheetSchema,
);
