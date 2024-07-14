import { ApiProperty } from '@nestjs/swagger';
import { Skills } from '../../data/skills';

export class QuerySkillDto {
  @ApiProperty({ enum: Object.keys(Skills) })
    id: string;
}
