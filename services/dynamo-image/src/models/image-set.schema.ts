/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Type,
  IsString,
  IsOptional,
  ValidateNested,
  ArrayUnique,
  ArrayMinSize,
  ArrayMaxSize,
} from '@cats-cradle/validation-schemas';
import { BaseEntity, BaseEntityProps } from '@cats-cradle/nestjs-modules';
import { ImageVariantEmbeddable } from './image-variant-embeddable.schema';

@Schema({ collection: 'image-set' })
export class ImageSet extends BaseEntity {
  @IsString()
  @IsOptional()
  @Prop({
    set: (key: string) => key.trim(),
  })
  public key?: string;

  @ValidateNested({ each: true })
  @Type(() => ImageVariantEmbeddable)
  @ArrayUnique()
  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @Prop([])
  public variants: ImageVariantEmbeddable[];

  constructor(partial: NonNullable<Omit<ImageSet, BaseEntityProps>>) {
    super();
    Object.assign(this, partial);
  }
}

export type TImageSetDocument = ImageSet & Document;

export const ImageSetSchema = SchemaFactory.createForClass(ImageSet)
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

ImageSetSchema.index({
  id: 1,
});
