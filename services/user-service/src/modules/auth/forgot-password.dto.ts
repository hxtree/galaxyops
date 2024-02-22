import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ForgotPasswordDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'jdoe',
  })
    username: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'password1234!',
  })
    password: string;
}
