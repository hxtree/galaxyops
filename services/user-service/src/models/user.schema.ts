/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from '@galaxyops/nestjs-modules';
import { Document } from 'mongoose';
import {
  Type,
  IsUuidV4,
  IsString,
  IsUUID,
  IsEnum,
  IsOptional,
  IsInstance,
  ValidateNested,
  ArrayUnique,
  ArrayMinSize,
  ArrayMaxSize,
  IsArray,
} from '@galaxyops/validation-schemas';

// instance_id, used in other services to ensure
// one player can only make calls to a single instance.
// user_id
// access
// user | instance_id
// 1 | a
// 1 | b
// 2 | c

@Schema({ collection: 'authentication-service' })
export class User extends BaseEntity {
  @IsUUID()
  @Prop()
  public instanceId!: string;

  @IsString()
  @IsOptional()
  @Prop({
    set: (content: string) => content.trim(),
  })
  public name?: string;

  @IsString()
  @IsOptional()
  @Prop({
    set: (content: string) => content.trim(),
  })
  public surname?: string;
}

export type TUserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User)
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
    transform(doc, ret) {
      ret._id = ret.id;
      delete ret.id;
    },
  });

UserSchema.virtual('fullName').get(function () {
  return `${this.name} ${this.surname}`;
});

UserSchema.index({
  id: 1,
});
