import { ApiProperty } from '@nestjs/swagger';
import { Place } from '../../data/towns.place';

export class SpawnCharacterSheetDto {
  @ApiProperty()
  public id?: string;

  @ApiProperty({
    enum: Object.keys(Place),
    description:
      'Generate spawns within the designated area only when the party is present.',
  })
  public place: Place.Type;

  // TODO question for level designers
  // should any character params be exposed?
  // should everything be chosen at random?
}
