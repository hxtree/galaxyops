import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsFQDN } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserForgottenPasswordResetDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email recipient',
    default: 'jane.doe@example.com',
  })
  @Expose()
  recipient!: string;
  @IsString()
  @ApiProperty({
    description: 'The username of the recipient',
    default: 'jane.doe',
  })
  @Expose()
  username!: string;

  // @IsFQDN() doesn't work with pipe for some reason
  @IsString()
  @ApiProperty({
    description: 'The link for the reset password',
    default: 'https://example.com/forgot-password-reset?token=abc123',
  })
  @Expose()
  link!: string;
}
