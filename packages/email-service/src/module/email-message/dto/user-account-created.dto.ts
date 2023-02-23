import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserAccountCreatedDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email recipient',
    default: 'jane.doe@example.com',
  })
  @Expose()
  recipient!: string;

  @IsString()
  @ApiProperty({
    description: 'The first name of the recipient',
    default: 'Jane',
  })
  @Expose()
  firstName!: string;
}
