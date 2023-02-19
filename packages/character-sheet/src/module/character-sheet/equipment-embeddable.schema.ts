import { Prop, Schema } from '@nestjs/mongoose';
import { IsString } from '@cats-cradle/validation-schemas';

// import {Gear} from '../component/gear/Gear';

@Schema()
export class EquipmentEmbeddable {
  @IsString()
  @Prop()
  public name!: string;

  @Prop()
  public gearSlots!: string[];
}
