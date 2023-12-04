import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity, BaseEntityProps } from '../../mongoose';

@Schema()
export class Person extends BaseEntity {
  @Prop({
    type: String,
    trim: true,
  })
  public firstName!: string;

  @Prop({
    type: String,
    trim: true,
  })
  public lastName!: string;

  constructor(partial: NonNullable<Omit<Person, BaseEntityProps>>) {
    super();
    Object.assign(this, partial);
  }
}

export type TPersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
