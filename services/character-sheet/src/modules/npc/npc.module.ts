import { Module } from '@nestjs/common';
import { MongooseModule } from '@galaxyops/nestjs-modules';
import { databaseModule } from '../../database.module';
import { NpcController } from './npc.controller';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheetSchema } from '../../models/character-sheet.schema';
import { PlaceService } from '../place/place.service';
import { SpawnService } from './spawn.service';

@Module({
  controllers: [NpcController],
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'CharacterSheet', schema: CharacterSheetSchema },
    ]),
  ],
  providers: [PlaceService, CharacterSheetRepository, SpawnService],
})
export class NpcModule {}
