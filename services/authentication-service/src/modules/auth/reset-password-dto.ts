import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'jdoe',
  })
    username: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'code1234!',
  })
    code: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'password1234!',
  })
    newPassword: string;
}
