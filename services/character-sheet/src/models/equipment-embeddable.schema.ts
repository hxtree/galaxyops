import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEnum,
  ArrayUnique,
  ArrayMinSize,
  ArrayMaxSize,
} from '@cats-cradle/validation-schemas';
import { Slot } from '@galaxyops/character-sheet-contracts';
import { EquipmentId, EquipmentIds } from '../data/gear/equipment.gear';

@Schema({ _id: false })
export class EquipmentEmbeddable {
  @IsEnum(EquipmentIds)
  @Prop({
    enum: EquipmentIds,
    required: true,
    type: String,
  })
  public equipmentId!: EquipmentId;

  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsEnum(Slot, { each: true })
  @Prop()
  public gearSlots!: Slot[];
}
