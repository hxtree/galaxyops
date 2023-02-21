import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

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
  template = '/user-account-created.template';
}
