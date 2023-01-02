import { Controller, Get, Param } from '@nestjs/common';
import { RollService } from './roll.service';
import { QueryRollDto } from './query-roll.dto';
import { ResponseRollDto } from './response-roll.dto';

@Controller('roll')
export class RollController {
  _rollService;

  // DI not working, probably due to esbuild
  constructor() {
    this._rollService = new RollService();
  }

  @Get('notation/:notation/luck/:luck')
  async turn(@Param() param: QueryRollDto): Promise<ResponseRollDto> {
    return this._rollService.turn(param.notation, param.luck);
  }
}
