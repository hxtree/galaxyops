import { ApiProperty } from '@nestjs/swagger';
import { IsFilename, IsString } from '@cats-cradle/validation-schemas';

export class CreateHtmlToPdfDto {
  @IsString()
  @ApiProperty({
    description: 'HTML',
    default: '<html><body>Hello, World</body></html>',
    type: String,
  })
  public html: string;

  @IsFilename()
  @ApiProperty({
    description: 'Filename',
    default: 'report.pdf',
    type: String,
  })
  public filename: string;
}
