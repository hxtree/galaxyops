import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@cats-cradle/nestjs-modules';
import { TImageSetDocument, ImageSet } from './image-set.schema';

@Injectable()
export class ImageSetRepository extends BaseRepository<TImageSetDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(ImageSet.name)
    private entity: Model<TImageSetDocument>,
  ) {
    super(entity);
  }
}
