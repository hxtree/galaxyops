/* eslint-disable func-names */
import { BaseEntity, BaseEntityProps } from '@cats-cradle/nestjs-modules';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import {
  IsDateString,
  IsNumber,
  IsUuidV4,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { Transform } from 'class-transformer';
import { UUID } from 'mongodb';
import { Achievement } from './achievement.schema';

@Schema({ collection: 'player-achievements' })
export class PlayerAchievement extends BaseEntity {
  @IsUuidV4()
  @Prop({
    type: String,
    default: () => v4(),
  })
  public playerId: string;

  @IsUuidV4()
  // @Transform(({ value }) => new UUID(value) as unknown as MongooseSchema.Types.ObjectId)
  // @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Achievement' })
  @Prop({ type: String, ref: 'Achievement' })
  public achievementId: Achievement;

  @IsNumber()
  @Prop({
    type: Number,
    default: () => 0,
  })
  public progress: number;

  constructor(partial: NonNullable<PlayerAchievement>) {
    super(partial);
    Object.assign(this, partial);
  }
}

export type TPlayerAchievementDocument = PlayerAchievement & Document;

export const PlayerAchievementSchema = SchemaFactory.createForClass(
  PlayerAchievement,
)
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

PlayerAchievementSchema.index({
  id: 1,
});
