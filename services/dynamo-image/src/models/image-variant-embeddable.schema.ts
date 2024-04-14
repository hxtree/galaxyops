/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEnum, IsInt, Min, Max,
} from '@cats-cradle/validation-schemas';
import { ImageVariant } from './image-variant.enum';

@Schema()
export class ImageVariantEmbeddable {
  @IsEnum(ImageVariant)
  @Prop({
    type: String,
    required: true,
    enum: ImageVariant,
  })
  public variant!: ImageVariant;

  @IsInt()
  @Min(0)
  @Max(255000)
  @Prop()
  public width!: number;

  @IsInt()
  @Min(0)
  @Max(255000)
  @Prop()
  public height!: number;

  @IsInt()
  @Min(0)
  @Max(255000)
  @Prop()
  public bytes!: number;
}

export const ImageVariantEmbeddableSchema = SchemaFactory.createForClass(
  ImageVariantEmbeddable,
);

ImageVariantEmbeddableSchema.virtual('size').get(function () {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (this.bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(this.bytes) / Math.log(1024));

  return (
    `${parseFloat((this.bytes / 1024 ** i).toFixed(2))} ${sizes[i]}`
  );
});
