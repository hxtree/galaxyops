import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsDateString,
  IsString,
  IsUUID,
  IsEnum,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { StatusType } from './status.type';

@Schema()
export class EmailRequest {
  @IsUUID()
  @Prop()
  public id!: string;

  @IsString()
  @Prop()
  public template!: string;

  @IsString()
  @Prop()
  public data?: string;

  @IsEnum(StatusType)
  @Prop()
  public status: StatusType;

  @IsDateString()
  @Prop()
  public createdAt: string;

  @IsDateString()
  @Prop()
  public updatedAt: string;

  constructor() {}
}

export type TEmailRequestDocument = EmailRequest & Document;

export const EmailRequestSchema = SchemaFactory.createForClass(
  EmailRequest,
).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

EmailRequestSchema.index({
  id: 1,
});
