import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEnum,
  ArrayUnique,
  ArrayMinSize,
  ArrayMaxSize,
} from '@galaxyops/validation-schemas';
import { Slot } from '@galaxyops/character-sheet-contracts';
import { GearId, GearIds } from '../data/gear';

@Schema({ _id: false })
export class GearEmbeddable {
  @IsEnum(GearIds)
  @Prop({
    enum: GearIds,
    required: true,
    type: String,
  })
  public gearId!: GearId;

  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsEnum(Slot, { each: true })
  @Prop()
  public gearSlots!: Slot[];
}
