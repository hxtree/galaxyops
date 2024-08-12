import { ApiProperty } from '@nestjs/swagger';
import { Place } from '../../data';

export class DeleteSpawnsDto {
  @ApiProperty()
  public instanceId?: string;

  @ApiProperty({
    description: 'Delete all spawns in a designated area.',
    enum: Object.keys(Place),
  })
  public place: Place.Type;
}
