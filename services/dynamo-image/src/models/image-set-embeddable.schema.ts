import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEnum, IsInt, Min, Max,
} from '@cats-cradle/validation-schemas';
import { ImageVariant } from './image-variant.enum';

@Schema()
export class ImageSetEmbeddable {
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
  public filesize!: number;
}
