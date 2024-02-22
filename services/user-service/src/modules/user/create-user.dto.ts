import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
    id: string;
}
