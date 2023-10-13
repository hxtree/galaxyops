import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export class QueryAffiliationDto {
  @ApiProperty({
    default: v4(),
  })
    characterSheetId: string;
}
