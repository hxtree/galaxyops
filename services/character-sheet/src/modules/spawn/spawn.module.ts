import { Module } from '@nestjs/common';
import {
  rootMongooseTestModule,
  rootMongooseModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { CharacterSheetService } from '../character-sheet/character-sheet.service';
import { SpawnController } from './spawn.controller';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheetSchema } from '../../models/character-sheet.schema';
import { PlaceService } from '../place/place.service';
import { SpawnService } from './spawn.service';

@Module({
  controllers: [SpawnController],
  providers: [
    PlaceService,
    CharacterSheetService,
    CharacterSheetRepository,
    SpawnService,
  ],
  imports: [
    rootMongooseTestModule(),
    MongooseModule.forFeature([
      { name: 'CharacterSheet', schema: CharacterSheetSchema },
    ]),
  ],
})
export class SpawnModule {}
