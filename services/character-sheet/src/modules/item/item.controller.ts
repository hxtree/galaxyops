import {
  NotFoundException,
  Controller,
  Get,
  Param,
  VERSION_NEUTRAL,
  BadRequestException,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { QueryItemDto } from './query-item.dto';

@Controller({ path: 'items', version: [VERSION_NEUTRAL, '1'] })
export class ItemController {
  _itemService;

  // DI not working, probably due to esbuild
  constructor() {
    this._itemService = new ItemService();
  }

  @Get('/')
  async list(): Promise<any> {
    return this._itemService.list();
  }

  @Get('/:id')
  async find(@Param() param: QueryItemDto): Promise<any> {
    return this._itemService.find(param.id);
  }

  @Get('/consume/:id')
  async consume(@Param() param: QueryItemDto): Promise<any> {
    // TODO add logic to use
    return undefined;
  }

  @Get('/craft/:id')
  async craft(@Param() param: QueryItemDto): Promise<any> {
    const item = await this._itemService.find(param.id);
    if (item === undefined) {
      throw new NotFoundException('Item not found');
    }

    if (item.craftingMaterials === undefined) {
      throw new BadRequestException('Item cannot be crafted');
    }

    // TODO check if player has materials
    // remove crafting materials from player instance
    // add item to player instance
    return this._itemService.find(param.id);
  }
}
