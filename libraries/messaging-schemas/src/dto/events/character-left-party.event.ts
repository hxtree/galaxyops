import { IsUuidV4 } from '@galaxyops/validation-schemas';
import { BaseEventDto } from './base-event.dto';

export class CharacterLeftPartyEvent extends BaseEventDto {
  @IsUuidV4()
  public instanceId: string;

  @IsUuidV4()
  public characterId: string;
}
