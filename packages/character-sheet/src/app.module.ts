import {Module} from '@nestjs/common';
import {ArchetypeModule} from './module/archetype/archetype.module';
import {GearModule} from './module/gear/gear.module';
import {SkillModule} from './module/skill/skill.module';

@Module({
  imports: [ArchetypeModule, GearModule, SkillModule],
  providers: [],
  exports: [],
})
export class AppModule {}
