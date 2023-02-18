import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CharacterSheet {
  @Prop()
  public id!: string;

  @Prop()
  public firstName!: string;

  @Prop()
  public lastName!: string;
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema =
  SchemaFactory.createForClass(CharacterSheet);
