import { ApiProperty } from '@nestjs/swagger';

export class CreateUrlToPdfDto {
  @ApiProperty({
    description: 'url',
    default: 'https://google.com',
    type: String,
  })
  public url: string;

  @ApiProperty({
    description: 'Filename',
    default: 'report.pdf',
    type: String,
  })
  public filename: string;
}
