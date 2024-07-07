import { Module } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { databaseModule } from '../../database.module';
import { AffiliationService } from './affiliation.service';
import { AffiliationController } from './affiliation.controller';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheetSchema } from '../../models/character-sheet.schema';

@Module({
  controllers: [AffiliationController],
  imports: [
    databaseModule(),
    MongooseModule.forFeature([
      { name: 'CharacterSheet', schema: CharacterSheetSchema },
    ]),
  ],
  providers: [AffiliationService, CharacterSheetRepository],
})
export class AffiliationModule {}
