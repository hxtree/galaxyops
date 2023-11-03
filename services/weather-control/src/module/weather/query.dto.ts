import {
  IsLongitude,
  IsLatitude,
  IsDateString,
} from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';

export class QueryDto {
  @IsDateString()
  @ApiProperty({
    description: 'Date',
    default: new Date().toISOString(),
    type: String,
  })
    date: string;

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
