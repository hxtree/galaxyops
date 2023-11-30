/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  IsDateString,
  IsNumber,
  IsUuidV4,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { Achievement } from './achievement.schema';

@Schema({ collection: 'player-achievements' })
export class PlayerAchievement {
  @IsUuidV4()
  @Prop({
    type: String,
    default: () => v4(),
  })
  public _id!: string;

  @IsUuidV4()
  @Prop({
    type: String,
    default: () => v4(),
  })
  public playerId: string;

  @IsUuidV4()
  @Prop({
    type: String,
    ref: 'Achievement',
  })
  public achievementId: Achievement;

  @IsNumber()
  @Prop({
    type: Number,
    default: () => 0,
  })
  public progress: number;

  @IsDateString()
  @Prop({
    type: String,
    default: () => new Date().toISOString(),
  })
  public updatedAt: string;

  @IsDateString()
  @Prop({
    type: String,
    default: () => new Date().toISOString(),
  })
  public createdAt: string;

  constructor(partial: NonNullable<PlayerAchievement>) {
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
