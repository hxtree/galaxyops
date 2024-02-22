import { ApiProperty } from '@nestjs/swagger';

export class QueryUserDto {
  @ApiProperty()
    id: string;
}
