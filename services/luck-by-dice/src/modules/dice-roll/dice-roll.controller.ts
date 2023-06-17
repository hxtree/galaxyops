import { Controller, Body, Post, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { DiceRollService } from './dice-roll.service';
import { QueryRollDto } from './query-roll.dto';
import { ResponseRollDto } from './response-roll.dto';

@Controller({ path: 'dice-roll', version: ['1', VERSION_NEUTRAL] })
export class DiceRollController {
  private _rollService;

  // DI not working, probably due to esbuild
  constructor() {
    this._rollService = new DiceRollService();
  }

  @Post()
  create(@Body() param: QueryRollDto): Promise<ResponseRollDto> {
    return this._rollService.turn(
      param.notation,
      param.luck,
      param.iterations || 1,
    );
  }

  @Get()
  roll(): Promise<ResponseRollDto> {
    return this._rollService.turn('1d6', 0, 1);
  }
}
