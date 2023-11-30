import { Prop, Schema } from '@nestjs/mongoose';
import { IsEnum, IsNumber } from '@cats-cradle/validation-schemas';
import { Trophy } from './trophy.enum';

@Schema({ _id: false })
export class TrophyCriteriaEmbeddable {
  @IsNumber()
  @Prop({ required: true, type: Number })
  public value!: number;

  @IsEnum(Trophy)
  @Prop({
    type: String,
    required: true,
    enum: Trophy,
  })
  public trophy!: Trophy;
}
