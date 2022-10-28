import {ApiProperty} from '@nestjs/swagger';
import * as Skill from './component/skill';

export class QuerySkillDto {
  @ApiProperty({enum: Object.keys(Skill.Basic)})
  id: string;
}
