import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  @ApiProperty({
    default: 'jdoe@gmail.com',
  })
    email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'password1234!',
  })
    password: string;
}
