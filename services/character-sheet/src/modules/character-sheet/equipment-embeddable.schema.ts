import { Prop, Schema } from '@nestjs/mongoose';
import { IsEnum, IsString } from '@cats-cradle/validation-schemas';
import { Slot } from '../../data/gear/slot';

@Schema()
export class EquipmentEmbeddable {
  @IsString()
  @Prop()
  public name!: string;

  @IsEnum(Slot)
  @Prop()
  public gearSlots!: Slot[];
}
