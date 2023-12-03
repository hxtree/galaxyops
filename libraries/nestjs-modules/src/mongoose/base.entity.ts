/* eslint-disable func-names */
import { Prop } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
import { IsDateString, IsUuidV4 } from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { UUID } from 'bson';

export type BaseEntityProps = '_id' | 'updatedAt' | 'createdAt';

export class BaseEntity {
  // @Transform(({ value }) => value.toString())
  // _id: ObjectId;
  @IsUuidV4()
  @Prop({
    type: Schema.Types.UUID,
    default: () => new UUID(),
  })
  _id!: string;

  @IsDateString()
  @Prop({
    type: String,
    default: () => new Date().toISOString(),
  })
  public updatedAt: string;

  @IsDateString()
  @Prop({
    required: true,
    type: String,
    default: () => new Date().toISOString(),
  })
  public createdAt: string;
}
