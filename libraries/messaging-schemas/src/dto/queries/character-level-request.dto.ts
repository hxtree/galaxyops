import { IsUuidV4 } from '@galaxyops/validation-schemas';
import { BaseRequestDto } from './base-request.dto';

export class CharacterLevelRequest extends BaseRequestDto {
  @IsUuidV4()
  public instanceId: string;

  @IsUuidV4()
  public characterId: string;
}
