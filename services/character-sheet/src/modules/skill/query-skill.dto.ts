import { ApiProperty } from '@nestjs/swagger';
import { Skills } from '../../data';

export class QuerySkillDto {
  @ApiProperty({ enum: Object.keys(Skills) })
    id: string;
}
