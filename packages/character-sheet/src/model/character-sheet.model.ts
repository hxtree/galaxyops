import {Schema, model} from 'mongoose';
import {v4 as uuidv4} from 'uuid';
import {Trait} from '../component/character/Trait';
import {Discipline} from '../component//character/Discipline';
import {Drive, Life, Spirit} from '../component//character/Attribute';
import {GearSlot} from '../component//gear/Gear';
import {Equipment} from '../component//gear/Equipment';

// interface representing a document
export interface ICharacterSheet {
  id: uuidv4;
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
  equipment: {gearSlot: GearSlot; equipment: Equipment}[];
  updatedAt: Date;
  createdAt: Date;
}

// Schema for document interface
export const characterSheetSchema = new Schema<ICharacterSheet>({
  id: {type: uuidv4, required: true},
  archetype: {type: String, required: true},
  traits: {type: [], required: true},
  attributes: {type: [], required: true},
  experiences: {type: [], required: true},
  equipment: {type: [], required: true},
  updatedAt: {Date, required: true},
  createdAt: {Date, required: true},
});

// Model.
export const CharacterSheet = model<ICharacterSheet>(
  'CharacterSheet',
  characterSheetSchema,
);
