import { IsOptional, IsUuidV4 } from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export class QueryDto {
  @IsUuidV4()
  @IsOptional()
  @ApiProperty({
    description: 'The instance id',
    default: v4(),
    type: String,
  })
    id: string;
}
