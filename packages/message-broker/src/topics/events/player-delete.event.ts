import { IsUUID } from '@cats-cradle/validation-schemas';

export class PlayerDeleteEvent {
  @IsUUID()
  public playerId!: string;
}
