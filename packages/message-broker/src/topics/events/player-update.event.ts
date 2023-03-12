import { IsUUID } from '@cats-cradle/validation-schemas';

export class PlayerUpdateEvent {
  @IsUUID()
  public playerId!: string;
}
