import {
  IsLongitude,
  IsLatitude,
  IsEnum,
} from '@galaxyops/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { HappinessType } from './happiness.type';

export class CreateDto {
  @IsEnum(HappinessType)
  @ApiProperty({
    description: 'Mood of the one who influences the in-game weather',
    default: HappinessType.JOYFUL,
    type: String,
  })
    mood: HappinessType;

  @IsLatitude()
  @ApiProperty({
    description: 'Latitude',
    default: '38.2942',
    type: String,
  })
    latitude: string;

  @IsLongitude()
  @ApiProperty({
    description: 'Longitude',
    default: '141.4164',
    type: String,
  })
    longitude: string;
}
