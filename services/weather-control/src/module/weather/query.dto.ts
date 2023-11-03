import { IsLongitude, IsLatitude } from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';

export class QueryDto {
  @IsDate()
  @ApiProperty({
    description: 'Date',
    default: new Date(),
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
