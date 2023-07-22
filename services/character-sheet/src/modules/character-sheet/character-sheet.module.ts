import { Module } from '@nestjs/common';
import {
  rootMongooseTestModule,
  rootMongooseModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { CharacterSheetService } from './character-sheet.service';
import { CharacterSheetController } from './character-sheet.controller';
import { CharacterSheetRepository } from './character-sheet.repository';
import { CharacterSheetSchema } from './character-sheet.schema';
import { PlaceService } from '../place/place.service';
import { SpawnService } from './spawn.service';

@Module({
  controllers: [CharacterSheetController],
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
export class CharacterSheetModule {}
