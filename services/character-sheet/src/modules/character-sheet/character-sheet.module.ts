import { Module } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { databaseModule } from '../../database.module';
import { CharacterSheetController } from './character-sheet.controller';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheetSchema } from '../../models/character-sheet.schema';
import { PlaceService } from '../place/place.service';

@Module({
  controllers: [CharacterSheetController],
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'CharacterSheet', schema: CharacterSheetSchema },
    ]),
  ],
  providers: [PlaceService, CharacterSheetRepository],
})
export class CharacterSheetModule {}
