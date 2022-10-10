import {Schema, model } from 'mongoose';


// interface representing a document
export interface ICharacterSheet {
  id: string;
  archetype:  string;
  traits: Trait[];
  attributes:  Attributes;
  experiences: Experience[];
  equipment: Equipment[];
  updatedAt: Date;
  createdAt: Date;
}

// Schema for document interface
export const charactersheetSchema = new Schema<ICharacterSheet>({
  id: {type: number, required: true},
  archetype: {type: String, required: true},
  traits: {type: Trait[], required: true},
  attributes: {type: Attributes, required: true},
  experiences: { Experience[], required: true},
  equipment: { Equipment[], required: true},
  updatedAt: { Date, required: true},
  createdAt: { Date, required: true},
});

// Model.
export const CharacterSheet = model<ICharacterSheet>(
  'CharacterSheet',
  charactersheetSchema,
);
