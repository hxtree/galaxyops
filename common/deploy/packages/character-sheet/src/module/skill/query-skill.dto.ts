import { ApiProperty } from '@nestjs/swagger';
import { Skill } from '../../data/skill';

export class QuerySkillDto {
  @ApiProperty({ enum: Object.keys(Skill) })
  id: string;
}
