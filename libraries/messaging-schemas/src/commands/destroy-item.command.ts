import { IsUUID } from '@cats-cradle/validation-schemas';
import { BaseCommandDto } from '../base';

export class DestroyItemCommand extends BaseCommandDto {
  @IsUUID()
  public itemId: string;
}
