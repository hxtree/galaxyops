import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEnum } from '@cats-cradle/validation-schemas';
import { BaseEntity, BaseEntityProps } from '@cats-cradle/nestjs-modules';
import { StatusType } from './status.type';

@Schema({ collection: 'email-messages' })
export class EmailMessage extends BaseEntity {
  @IsString()
  @Prop()
  public template!: string;

  @IsString()
  @Prop()
  public data?: string;

  @IsEnum(StatusType)
  @Prop({
    type: String,
    enum: Object.values(StatusType),
    default: StatusType.OPEN,
  })
  public status: StatusType;

  constructor(partial: NonNullable<Omit<EmailMessage, BaseEntityProps>>) {
    super();
    Object.assign(this, partial);
  }
}

export type TEmailMessageDocument = EmailMessage & Document;

export const EmailMessageSchema = SchemaFactory.createForClass(EmailMessage)
  .set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
      delete ret._id;
    },
  })
  .set('toObject', {
    virtuals: true,
    versionKey: false,
    transform(doc: any, ret: any) {
      ret._id = ret.id;
      delete ret.id;
    },
  });

EmailMessageSchema.index({
  id: 1,
});
