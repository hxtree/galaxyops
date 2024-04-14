import { ApiProperty } from '@nestjs/swagger';

export class QueryImageDto {
  @ApiProperty()
    key: string;
}
