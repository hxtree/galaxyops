import {
  Controller, Get, Param, VERSION_NEUTRAL,
} from '@nestjs/common';
import { AffiliationService } from './affiliation.service';
import { QueryAffiliationDto } from './query-affiliation.dto';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';

@Controller({ path: '/affiliations', version: [VERSION_NEUTRAL, '1'] })
export class AffiliationController {
  constructor(
    private _affiliationService: AffiliationService,
    private _characterSheetRepository: CharacterSheetRepository,
  ) {}

  @Get('/:id')
  async find(@Param() param: QueryAffiliationDto): Promise<any> {
    const result = await this._characterSheetRepository.findOne({
      id: param.characterSheetId,
    });

    if (!result) {
      return [];
    }

    return result.affiliation ?? [];
  }

  // :id/:id
  // POST :id/:id +2 -2
}
