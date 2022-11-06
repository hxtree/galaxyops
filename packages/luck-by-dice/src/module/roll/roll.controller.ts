import {Controller, Get, Param} from '@nestjs/common';
import {RollService} from './roll.service';
import {QueryRollDto, ResponseRollDto} from './roll.dto';

@Controller('roll')
export class RollController {
  _rollService;

  // DI not working, probably due to esbuild
  constructor() {
    this._rollService = new RollService();
  }

  @Get('notation/:notation/luck/:luck')
  async turn(@Param() QueryRollDto: QueryRollDto): Promise<ResponseRollDto> {
    return await this._rollService.turn(
      QueryRollDto.notation,
      QueryRollDto.luck,
    );
  }
}
