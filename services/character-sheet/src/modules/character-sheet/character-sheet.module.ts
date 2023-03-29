import { Module } from '@nestjs/common';
import {
  rootMongooseModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { CharacterSheetService } from './character-sheet.service';
import { CharacterSheetController } from './character-sheet.controller';
import { CharacterSheetRepository } from './character-sheet.repository';
import { CharacterSheetSchema } from './character-sheet.schema';

@Module({
  controllers: [CharacterSheetController],
  providers: [CharacterSheetService, CharacterSheetRepository],
  imports: [
    rootMongooseModule(),
    MongooseModule.forFeature([
      { name: 'CharacterSheet', schema: CharacterSheetSchema },
    ]),
  ],
})
export class CharacterSheetModule {}
