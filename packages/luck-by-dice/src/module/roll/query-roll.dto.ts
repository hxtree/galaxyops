import { ApiProperty } from '@nestjs/swagger';

export class QueryRollDto {
  @ApiProperty()
  notation: string;

  @ApiProperty()
  luck: number;
}
