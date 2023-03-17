import { IsUUID } from '@cats-cradle/validation-schemas';
import { BaseCommandDto } from '../base';

export class ItemDestroyCommand extends BaseCommandDto {
  @IsUUID()
  public itemId: string;
}
