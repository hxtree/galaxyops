import {ApiProperty} from '@nestjs/swagger';
import {Skill} from '../../value-object/skill';

export class QuerySkillDto {
  @ApiProperty({enum: Object.keys(Skill)})
  id: string;
}
