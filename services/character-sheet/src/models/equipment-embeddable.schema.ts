import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEnum,
  ArrayUnique,
  ArrayMinSize,
  ArrayMaxSize,
} from '@cats-cradle/validation-schemas';
import { Slot } from '../data/gear/slot';
import { EquipmentId, EquipmentIds } from '../data/gear/equipment.gear';

@Schema({ _id: false })
export class EquipmentEmbeddable {
  @IsEnum(EquipmentIds)
  @Prop({
    type: String,
    required: true,
    enum: EquipmentIds,
  })
  public equipmentId!: EquipmentId;

  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsEnum(Slot, { each: true })
  @Prop()
  public gearSlots!: Slot[];
}
