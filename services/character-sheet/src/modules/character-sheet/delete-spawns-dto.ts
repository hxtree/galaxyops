import { ApiProperty } from '@nestjs/swagger';
import { Place } from '../../data/place';

export class DeleteSpawnsDto {
  @ApiProperty()
  public instanceId?: string;

  @ApiProperty({
    enum: Object.keys(Place),
    description: 'Delete all spawns in a designated area.',
  })
  public place: Place.Type;
}
