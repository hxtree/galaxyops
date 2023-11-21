/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsDateString,
  IsNumber,
  IsUuidV4,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';

@Schema({ collection: 'instance' })
export class Instance {
  // extends Document {
  // @Transform(({ value }) => value.toString())
  // _id: ObjectId;

  @IsUuidV4()
  @Prop({
    type: String,
    default: () => v4(),
  })
  public _id!: string;

  /**
   * Duration always increases when a player is logged into an instance.
   * It stops when all players log out of an instance.
   */
  @IsNumber()
  @Prop({
    type: Number,
    default: () => 0,
  })
  public duration: number;

  @IsDateString()
  @Prop({
    type: String,
    default: () => new Date().toISOString(),
  })
  public createdAt: string;
}

export type TInstanceDocument = Instance & Document;

export const InstanceSchema = SchemaFactory.createForClass(Instance)
  .set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc: any, ret: any) {
      ret.id = ret._id;
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

/**
 * HT stands for Hadean Time which is the time period in which the universe began,
 * Time progresses in reverse. The "-" before the time period indicates that it is
 * a count down until our universe begins, 5 billion years ago.
 * Time is displayed to the User using a HT format.
 * Time Format: -00E-053-0125HT
 *
 * use duration property for computation; not time.
 */
InstanceSchema.virtual('time').get(function () {
  const baseTime = -530125;
  const hadeanTime: string = String(baseTime + this.duration).padStart(2, '0');
  return `${hadeanTime} HT`;
});

InstanceSchema.index({
  id: 1,
});
