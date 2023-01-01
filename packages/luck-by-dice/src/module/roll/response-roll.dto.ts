import {ApiProperty} from '@nestjs/swagger';

export class ResponseRollDto {
  @ApiProperty({enum: ['Success', 'Error', 'Fail']})
  message: string;

  @ApiProperty()
  data: string[];
}
