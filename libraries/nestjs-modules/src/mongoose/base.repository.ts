import {
  FilterQuery,
  Model,
  QueryOptions,
  UpdateQuery,
  UpdateWithAggregationPipeline,
  Document,
} from 'mongoose';
import { UUID } from 'bson';

export type UpdateModelResponse = {
  matchedCount: number;
  modifiedCount: number;
  acknowledged: boolean;
  upsertedId: unknown | UUID;
  upsertedCount: number;
};

export type DeleteModelResponse = {
  deletedCount: number;
  deleted: boolean;
};

export type FindOptions = {
  skip?: number;
  limit?: number;
  populate?: string[] | string;
};

export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async populate(result: T[], option: any) {
    return this.model.populate(result, option);
  }

  async aggregate(option: any) {
    return this.model.aggregate(option);
  }

  async create(doc: object): Promise<T | null> {
    // eslint-disable-next-line new-cap
    const createdEntity = new this.model({ ...doc });
    await createdEntity.save();

    return createdEntity;
  }

  async findOne(
    filter: FilterQuery<T>,
    options?: FindOptions,
  ): Promise<T | null | any> {
    if (options?.populate) {
      return this.model.findOne(filter).populate(options.populate).exec();
    }

    return this.model.findOne(filter);
  }

  async findOneOrFail(
    filter: FilterQuery<T>,
    options?: FindOptions,
  ): Promise<T | null | any> {
    const result = await this.findOne(filter, options);

    if (result === null) {
      return Promise.reject(new Error('No results found'));
    }

    return result;
  }

  async find(filter: FilterQuery<T>, options?: QueryOptions): Promise<T[]> {
    // TODO add
    // .skip(skip)
    // .limit(limit)

    return this.model.find(filter, null, options);
  }

  async findById(id: string, options?: FindOptions): Promise<T | null | any> {
    if (options?.populate) {
      return this.model.findById(id).populate(options.populate).exec();
    }

    return this.model.findById(id);
  }

  async findAll(): Promise<T[]> {
    return this.model.find();
  }

  async delete(filter: FilterQuery<T>): Promise<DeleteModelResponse> {
    const { deletedCount } = await this.model.deleteOne(filter);
    return { deletedCount, deleted: !!deletedCount };
  }

  async deleteAll(): Promise<DeleteModelResponse> {
    const { deletedCount } = await this.model.deleteMany({});
    return { deletedCount, deleted: !!deletedCount };
  }

  async updateOne(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<UpdateModelResponse> {
    return this.model.updateOne(filter, updated, options);
  }

  async updateMany(
    filter: FilterQuery<T>,
    updated: UpdateWithAggregationPipeline | UpdateQuery<T>,
    options?: QueryOptions,
  ): Promise<UpdateModelResponse> {
    return this.model.updateMany(filter, updated, options);
  }
}
