import { ApiProperty } from '@nestjs/swagger';
import { Place } from '../../data/place';

export class CreateSpawnsDto {
  @ApiProperty()
  public instanceId: string;

  @ApiProperty({
    description:
      'Generate a spawn for a designated area. Requestor is responsible for only making request for areas where party is presence to avoid computing irrelevant spawns.',
    enum: Object.keys(Place),
  })
  public place: Place.Type;
}
