import {Module} from '@nestjs/common';
import {SkillController} from './skill.controller';
import {SkillService} from './skill.service';
import {ArchetypeService} from './archetype.service';
import {ArchetypeController} from './archetype.controller';
import {GearService} from './gear.service';
import {GearController} from './gear.controller';

@Module({
  controllers: [ArchetypeController, SkillController, GearController],
  providers: [ArchetypeService, SkillService, GearService],
})
export class AppModule {}
