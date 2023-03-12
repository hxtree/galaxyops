import { IsUUID } from '@cats-cradle/validation-schemas';

export class PlayerCreateEvent {
  @IsUUID()
  public playerId!: string;
}
