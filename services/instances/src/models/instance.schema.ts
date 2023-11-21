/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsDateString,
  IsNumber,
  IsUuidV4,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { getHadeanTime } from './get-hadean-time';

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
   * the unit of measurement for the value stored is minutes
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

InstanceSchema.virtual('time').get(function () {
  return getHadeanTime(this.duration);
});

InstanceSchema.index({
  id: 1,
});
