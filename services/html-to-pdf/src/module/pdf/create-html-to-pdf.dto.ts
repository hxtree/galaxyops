import { ApiProperty } from '@nestjs/swagger';

export class CreateHtmlToPdfDto {
  @ApiProperty({
    description: 'HTML',
    default: '<html><body>Hello, World</body></html>',
    type: String,
  })
  public html: string;

  @ApiProperty({
    description: 'Filename',
    default: 'report.pdf',
    type: String,
  })
  public filename: string;
}
