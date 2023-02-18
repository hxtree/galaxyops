import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsUuidV4, IsString, IsUUID } from '@cats-cradle/validation-schemas';

@Schema()
export class CharacterSheet {
  @IsUuidV4() // TODO add suport to fakerfactory
  @IsUUID()
  @Prop()
  public id!: string;

  @IsString()
  @Prop()
  public firstName!: string;

  @IsString()
  @Prop()
  public lastName!: string;
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema =
  SchemaFactory.createForClass(CharacterSheet);
