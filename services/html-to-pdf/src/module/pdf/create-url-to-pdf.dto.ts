import { ApiProperty } from '@nestjs/swagger';
import { IsFilename, IsUrl } from '@cats-cradle/validation-schemas';

export class CreateUrlToPdfDto {
  @IsUrl()
  @ApiProperty({
    description: 'url',
    default: 'https://google.com',
    type: String,
  })
  public url: string;

  @IsFilename()
  @ApiProperty({
    description: 'Filename',
    default: 'report.pdf',
    type: String,
  })
  public filename: string;
}
