import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { TemplateDto } from './template.dto';

export class UserAccountCreatedDto extends TemplateDto {
  @IsString()
  @ApiProperty({
    description: 'The first name of the recipient',
    default: 'Jane',
  })
  @Expose()
  firstName!: string;
}
