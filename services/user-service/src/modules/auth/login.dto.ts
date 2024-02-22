import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    default: 'jdoe@example.com',
  })
    email: string;

  @IsString()
  @ApiProperty({
    default: 'password1234!',
  })
    password: string;
}
