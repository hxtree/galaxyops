import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongoosePagination } from 'ts-mongoose-pagination';
import { BaseEntity } from '../../mongoose';

export type TBookDocument = Book & Document;

@Schema()
export class Book extends BaseEntity {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  quantity: number;
}

export const BookSchema =
  SchemaFactory.createForClass(Book).plugin(mongoosePagination);
