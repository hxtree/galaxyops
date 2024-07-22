import { Min, IsInt, IsUuidV4 } from '@galaxyops/validation-schemas';
import { BaseEventDto } from './base-event.dto';

export class CharacterLevelUpEvent extends BaseEventDto {
  @IsUuidV4()
  public instanceId: string;

  @IsUuidV4()
  public characterId: string;

  @IsInt()
  @Min(0)
  public level: number;
}
