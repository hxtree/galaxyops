/* eslint-disable func-names */
import { BaseEntity, BaseEntityProps } from '@galaxyops/nestjs-modules';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { IsNumber, IsUuidV4 } from '@galaxyops/validation-schemas';
import { v4 } from 'uuid';
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
  @Prop({
    type: MongooseSchema.Types.UUID,
    ref: 'Achievement',
  })
  public achievement: MongooseSchema.Types.UUID | Achievement;

  @IsNumber()
  @Prop({
    type: Number,
    default: () => 0,
  })
  public progress: number;

  constructor(partial: NonNullable<Omit<PlayerAchievement, BaseEntityProps>>) {
    super();
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
