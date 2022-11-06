import {ApiProperty} from '@nestjs/swagger';

export class QueryRollDto {
  @ApiProperty()
  notation: string;

  @ApiProperty()
  luck: number;
}

export class ResponseRollDto {
  @ApiProperty({enum: ['Success', 'Error', 'Fail']})
  message: string;

  @ApiProperty()
  data: string[];
}
