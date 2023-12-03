import {
  FilterQuery,
  Model,
  QueryOptions,
  UpdateQuery,
  UpdateWithAggregationPipeline,
  Document,
} from 'mongoose';
import { UUID, ObjectId } from 'bson';
import { v4 } from 'uuid';

export type UpdateModelResponse = {
  matchedCount: number;
  modifiedCount: number;
  acknowledged: boolean;
  upsertedId: unknown | ObjectId;
  upsertedCount: number;
};

export type DeleteModelResponse = {
  deletedCount: number;
  deleted: boolean;
};

export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(doc: object): Promise<T | null> {
    const createdEntity = new this.model({ ...doc });
    await createdEntity.save();

    return createdEntity;
  }

  async findOne(
    filter: FilterQuery<T>,
    options?: QueryOptions,
  ): Promise<T | null> {
    return this.model.findOne(filter, options);
  }

  async findOneOrFail(
    filter: FilterQuery<T>,
    options?: QueryOptions,
  ): Promise<T | null> {
    const result = await this.model.findOne(filter, options);

    if (result === null) {
      return Promise.reject(new Error('No results found'));
    }

    return result;
  }

  async find(filter: FilterQuery<T>, options?: QueryOptions): Promise<T[]> {
    return this.model.find(filter, null, options);
  }

  async findById(id: string): Promise<T | null> {
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
