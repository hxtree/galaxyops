import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum, IsString } from '@cats-cradle/validation-schemas';
import { Slot } from '../data/gear/slot';
import { EquipmentId, EquipmentIds } from '../data/gear/equipment.gear';

@Schema({ _id: false })
export class EquipmentEmbeddable {
  @IsEnum(EquipmentIds)
  @Prop()
  public equipmentId!: EquipmentId;

  @IsEnum(Slot, { each: true })
  @Prop()
  public gearSlots!: Slot[];
}
