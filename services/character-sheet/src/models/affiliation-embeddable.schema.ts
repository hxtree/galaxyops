import { Prop, Schema } from '@nestjs/mongoose';
import {
  IsInt, Min, Max, IsEnum,
} from '@galaxyops/validation-schemas';
import { AffiliationId, AffiliationIds } from '../data';

@Schema({ _id: false })
export class AffiliationEmbeddable {
  @IsEnum(AffiliationIds)
  @Prop({
    enum: AffiliationIds,
    required: true,
    type: String,
  })
  public affiliationId!: AffiliationId;

  @IsInt()
  @Min(0)
  @Max(255)
  @Prop()
  public amount!: number;
}
