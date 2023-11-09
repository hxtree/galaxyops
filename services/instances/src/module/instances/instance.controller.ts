import {
  Controller,
  Post,
  Body,
  VERSION_NEUTRAL,
  Delete,
} from '@nestjs/common';
import { CreateDto } from './create.dto';
import { InstanceRepository } from '../../models/instance.repository';
import { Instance } from '../../models/instance.schema';
import { DeleteDto } from './delete.dto';

@Controller({ path: 'instances', version: ['1', VERSION_NEUTRAL] })
export class InstanceController {
  constructor(private readonly _instanceRepository: InstanceRepository) {}

  @Post()
  async create(@Body() body: CreateDto) {
    const instance = new Instance();
    if (body.id !== undefined) {
      instance._id = body.id;
    }
    instance.createdAt = new Date().toISOString();

    // TODO publish event

    return this._instanceRepository.create(instance);
  }

  @Delete()
  async delete(@Body() body: DeleteDto) {
    return this._instanceRepository.delete({
      id: body.id,
    });

    // TODO publish event
  }
}
