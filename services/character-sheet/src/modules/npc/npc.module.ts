import { Module } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { databaseModule } from '../../database.module';
import { CharacterSheetService } from '../character-sheet/character-sheet.service';
import { NpcController } from './npc.controller';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheetSchema } from '../../models/character-sheet.schema';
import { PlaceService } from '../place/place.service';
import { SpawnService } from './spawn.service';

@Module({
  controllers: [NpcController],
  providers: [
    PlaceService,
    CharacterSheetService,
    CharacterSheetRepository,
    SpawnService,
  ],
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'CharacterSheet', schema: CharacterSheetSchema },
    ]),
  ],
})
export class NpcModule {}
