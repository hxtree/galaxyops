import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { AffiliationService } from './affiliation.service';
import { QueryAffiliationDto } from './query-affiliation.dto';
import { Operation, UpdateAffiliationDto } from './update-affiliation.dto';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { AffiliationEmbeddable } from '../../models/affiliation-embeddable.schema';

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

  @Post()
  async update(@Body() body: UpdateAffiliationDto): Promise<any> {
    const characterSheet = await this._characterSheetRepository.findOne({
      id: body.characterSheetId,
    });

    if (!characterSheet) {
      throw new BadRequestException('Not found');
    }

    characterSheet.affiliation.forEach(
      (affiliation: AffiliationEmbeddable, index: number) => {
        if (affiliation.affiliationId !== body.affiliationId) {
          return;
        }

        switch (body.operation) {
          case Operation.ADD:
            characterSheet.affiliation[index].amount += body.value;
            break;
          case Operation.REMOVE:
            characterSheet.affiliation[index].amount -= body.value;
            break;
          default:
            throw new BadRequestException('Invalid operation');
        }
      },
    );

    return this._characterSheetRepository.updateOne(
      { id: body.characterSheetId },
      characterSheet,
    );
  }
}
