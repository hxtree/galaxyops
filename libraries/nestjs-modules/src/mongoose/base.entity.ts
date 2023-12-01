/* eslint-disable func-names */
import { Prop } from '@nestjs/mongoose';
import { IsDateString, IsUuidV4 } from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';

export type BaseEntityProps = '_id' | 'updatedAt' | 'createdAt';

export class BaseEntity {
  @IsUuidV4()
  @Prop({
    required: true,
    type: String,
    default: () => v4(),
  })
  public _id!: string; // TODO can this be id: ?

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

  constructor(partial: NonNullable<BaseEntity>) {
    Object.assign(this, partial);
  }
}
