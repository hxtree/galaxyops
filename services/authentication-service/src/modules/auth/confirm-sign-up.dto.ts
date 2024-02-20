import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class ConfirmSignUpDto {
  @IsEmail()
  @ApiProperty({
    default: 'jdoe@gmail.com',
  })
    email: string;

  @IsString()
  @ApiProperty({
    default: '1234567',
  })
    code: string;
}
