import {
  NotFoundException,
  Controller,
  Get,
  Param,
  VERSION_NEUTRAL,
  BadRequestException,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { QueryImageDto } from './query-image.dto';

@Controller({ path: 'images', version: [VERSION_NEUTRAL, '1'] })
export class ImageController {
  _imageService;

  // DI not working, probably due to esbuild
  constructor() {
    this._imageService = new ImageService();
  }

  @Get('/')
  async list(): Promise<any> {
    return this._imageService.list();
  }

  @Get('/:id')
  async find(@Param() param: QueryImageDto): Promise<any> {
    if (param.id) {
      return this._imageService.find(param.id);
    }
    if (param.key) {
      return this._imageService.findByKey(param.key);
    }
    throw new BadRequestException();
  }
}
