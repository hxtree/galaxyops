import { IsUUID } from '@galaxyops/validation-schemas';
import { BaseCommandDto } from './base-command.dto';

export class ItemDestroyCommand extends BaseCommandDto {
  @IsUUID()
  public itemId: string;
}
