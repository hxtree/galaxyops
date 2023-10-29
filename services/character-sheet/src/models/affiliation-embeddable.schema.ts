import { Prop, Schema } from '@nestjs/mongoose';
import {
  IsInt, Min, Max, IsEnum,
} from '@cats-cradle/validation-schemas';
import { AffiliationId, AffiliationIds } from '../data/affiliations';

@Schema({ _id: false })
export class AffiliationEmbeddable {
  @IsEnum(AffiliationIds)
  @Prop({
    type: String,
    required: true,
    enum: AffiliationIds,
  })
  public affiliationId!: AffiliationId;

  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public amount!: number;
}
