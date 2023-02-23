import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Expose } from 'class-transformer';

export abstract class TemplateDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email recipient',
    default: 'jane.doe@example.com',
  })
  @Expose()
  recipient!: string;
}
