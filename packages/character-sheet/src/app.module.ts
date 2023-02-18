import { Module } from '@nestjs/common';
import { ArchetypeModule } from './module/archetype/archetype.module';
import { CharacterSheetModule } from './module/character-sheet/character-sheet.module';
import { GearModule } from './module/gear/gear.module';
import { SkillModule } from './module/skill/skill.module';

@Module({
  imports: [ArchetypeModule, GearModule, SkillModule, CharacterSheetModule],
  providers: [],
  exports: [],
})
export class AppModule {}
