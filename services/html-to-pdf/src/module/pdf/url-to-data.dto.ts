import { IsUrl } from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';

export class UrlToDataDto {
  @IsUrl()
  @ApiProperty({
    description: 'url',
    default: 'https://example.com',
    type: String,
  })
  public url: string;
}
