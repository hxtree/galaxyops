import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArchetypeModule } from './module/archetype/archetype.module';
import { CharacterSheetModule } from './module/character-sheet/character-sheet.module';
import { GearModule } from './module/gear/gear.module';
import { HealthModule } from './module/health/health.module';
import { SkillModule } from './module/skill/skill.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    ArchetypeModule,
    GearModule,
    SkillModule,
    CharacterSheetModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
