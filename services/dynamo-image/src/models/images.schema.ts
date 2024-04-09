import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsEnum } from '@cats-cradle/validation-schemas';
import { BaseEntity, BaseEntityProps } from '@cats-cradle/nestjs-modules';
import { ImageSetEmbeddable } from './image-set-embeddable.schema';
import { ImageFormat } from './image-format.enum';

@Schema({ collection: 'images' })
export class Image extends BaseEntity {
  @IsEnum(ImageFormat)
  @Prop({
    type: String,
    enum: Object.values(ImageFormat),
    default: ImageFormat.JPEG,
  })
  public format!: ImageFormat;

  @ValidateNested({ each: true })
  @Type(() => ImageSetEmbeddable)
  @ArrayUnique()
  @ArrayMinSize(0)
  @ArrayMaxSize(10)
  @Prop([])
  public imageSets: ImageSetEmbeddable[];

  constructor(partial: NonNullable<Omit<Image, BaseEntityProps>>) {
    super();
    Object.assign(this, partial);
  }
}

export type TImageDocument = Image & Document;

export const ImageSchema = SchemaFactory.createForClass(Image)
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
    transform(doc: any, ret: any) {
      ret._id = ret.id;
      delete ret.id;
    },
  });

ImageSchema.index({
  id: 1,
});
