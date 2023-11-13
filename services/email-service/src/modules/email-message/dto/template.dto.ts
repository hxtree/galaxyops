import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Expose } from 'class-transformer';
import { kebabCase } from 'lodash';

export abstract class TemplateDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email recipient',
    default: 'jane.doe@example.com',
  })
  @Expose()
    recipient!: string;

  static get slug(): string {
    return kebabCase(this.name);
  }
}
