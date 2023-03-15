import { Min, IsInt, IsUUID } from '@cats-cradle/validation-schemas';
import { BaseEventDto } from '../base';

export class CharacterLevelUpEvent extends BaseEventDto {
  @IsUUID()
  public characterId: string;

  @IsInt()
  @Min(0)
  public level: number;
}
