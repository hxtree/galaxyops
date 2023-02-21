import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { html } from '../templates/user-account-created.template';

export class UserAccountCreatedDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email receipent',
    default: 'jane.doe@example.com',
  })
  @Expose()
  recipient!: string;

  @IsString()
  @ApiProperty({
    description: 'The first name of the receipent',
    default: 'Jane',
  })
  @Expose()
  firstName!: string;

  @IsString()
  html = html;
}
