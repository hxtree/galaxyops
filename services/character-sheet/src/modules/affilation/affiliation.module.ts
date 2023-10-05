import { Module } from '@nestjs/common';
import { AffiliationService } from './affiliation.service';
import { AffiliationController } from './affiliation.controller';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';

@Module({
  controllers: [AffiliationController],
  providers: [AffiliationService, CharacterSheetRepository],
})
export class AffiliationModule {}
