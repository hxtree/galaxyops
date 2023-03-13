import { IsUUID } from '@cats-cradle/validation-schemas';
import { BaseEvent } from './base-event';

export class PlayerCreateEvent extends BaseEvent {
  @IsUUID()
  public playerId!: string;
}
