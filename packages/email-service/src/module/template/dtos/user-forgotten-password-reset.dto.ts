import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsFQDN, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserForgottenPasswordResetDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email of the receipent',
    default: 'jane.doe@example.com',
  })
  @Expose()
  recipient!: string;

  @IsEmail()
  @ApiProperty({
    description: 'The username of the receipent',
    default: 'janedoe',
  })
  @Expose()
  username!: string;

  @IsFQDN()
  @ApiProperty({
    description: 'The link for the reset password',
    default: 'https://example.com/forgot-password-reset?token=abc123',
  })
  @Expose()
  link!: string;
}
