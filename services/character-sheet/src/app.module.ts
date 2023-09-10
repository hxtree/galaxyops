import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArchetypeModule } from './modules/archetype/archetype.module';
import { CharacterSheetModule } from './modules/character-sheet/character-sheet.module';
import { GearModule } from './modules/gear/gear.module';
import { HealthModule } from './modules/health/health.module';
import { SkillModule } from './modules/skill/skill.module';
import { NpcModule } from './modules/npc/npc.module';
import { ItemModule } from './modules/item/item.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    ArchetypeModule,
    GearModule,
    SkillModule,
    CharacterSheetModule,
    NpcModule,
    ItemModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
