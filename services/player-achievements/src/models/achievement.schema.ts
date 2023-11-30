/* eslint-disable func-names */
import {
  Prop, Schema, SchemaFactory, raw,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsDateString,
  IsString,
  IsUuidV4,
  Type,
  ValidateNested,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { TrophyCriteriaEmbeddable } from './trophy-criteria-embeddable.schema';

@Schema({ collection: 'achievements' })
export class Achievement {
  @IsUuidV4()
  @Prop({
    required: true,
    type: String,
    default: () => v4(),
  })
  public _id!: string;

  @IsString()
  @Prop({
    required: true,
    type: String,
  })
  public title: string;

  @IsString()
  @Prop({
    required: true,
    type: String,
    default: () => v4(),
  })
  public description: string;

  /**
   * The SQS event that is listened to to increment the player progress
   */
  @IsString()
  @Prop({
    required: true,
    type: String,
    default: () => v4(),
  })
  public eventListener: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @Type(() => TrophyCriteriaEmbeddable)
  @Prop([])
  public trophyCriteria: TrophyCriteriaEmbeddable[];

  @IsDateString()
  @Prop({
    required: true,
    type: String,
    default: () => new Date().toISOString(),
  })
  public createdAt: string;

  constructor(partial: NonNullable<Achievement>) {
    Object.assign(this, partial);
  }
}

export type AchievementInfo = Omit<Achievement, '_id' | 'createdAt'>;

export type TAchievementDocument = Achievement & Document;

export const AchievementSchema = SchemaFactory.createForClass(Achievement)
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

AchievementSchema.index({
  id: 1,
});
