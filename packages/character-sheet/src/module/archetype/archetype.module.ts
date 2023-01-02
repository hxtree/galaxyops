import { Module } from '@nestjs/common';
import { ArchetypeService } from './archetype.service';
import { ArchetypeController } from './archetype.controller';

@Module({
  controllers: [ArchetypeController],
  providers: [ArchetypeService],
})
export class ArchetypeModule {}
