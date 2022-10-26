import {Schema, model} from 'mongoose';
import {v4 as uuidv4} from 'uuid';
import {Trait} from '../component/trait';
import {Discipline} from '../component/discipline';
import {Drive, Life, Spirit} from '../component/gauges';
import * as Gear from '../component/gear';

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
  experiences: {discipline: Discipline; experience: number}[];
  equipment: {gearSlot: Gear.Slot; equipment: Gear.Equipment}[];
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
