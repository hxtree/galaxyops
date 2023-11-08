import { IsInt, IsUuidV4 } from '@cats-cradle/validation-schemas';
import { BaseRequestDto } from './base-request.dto';

export class CharacterLevelReply extends BaseRequestDto {
  @IsUuidV4()
  public instanceId: string;

  @IsUuidV4()
  public characterId: string;

  @IsInt()
  public level: string;
}
