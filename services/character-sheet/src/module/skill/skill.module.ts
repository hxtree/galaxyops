import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';

@Module({
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
