import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Person {
  @Prop()
  public id!: string;

  @Prop()
  public firstName!: string;

  @Prop()
  public lastName!: string;
}

export type TPersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
