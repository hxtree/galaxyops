import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@galaxyops/nestjs-modules';
import { TInstanceDocument, Instance } from './instance.schema';

@Injectable()
export class InstanceRepository extends BaseRepository<TInstanceDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(Instance.name)
    private entity: Model<TInstanceDocument>,
  ) {
    super(entity);
  }
}
