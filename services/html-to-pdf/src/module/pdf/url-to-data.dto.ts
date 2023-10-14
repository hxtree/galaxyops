import { ApiProperty } from '@nestjs/swagger';

export class UrlToDataDto {
  @ApiProperty({
    description: 'url',
    default: 'https://example.com',
    type: String,
  })
  public url: string;
}
