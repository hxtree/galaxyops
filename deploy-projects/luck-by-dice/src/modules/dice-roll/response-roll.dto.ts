import { ApiProperty } from '@nestjs/swagger';

export enum MessageDto {
  SUCCESS = 'Success',
  ERROR = 'Error',
  FAIL = 'Fail',
}

export type RollDto = {
  total: number;
  luck: number;
  min: number;
  max: number;
  bonus: number;
};

export class ResponseRollDto {
  @ApiProperty({ enum: MessageDto })
  public message: string;

  @ApiProperty({})
  public data: RollDto[];
}
