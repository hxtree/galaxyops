import {
  FilterQuery,
  Model,
  QueryOptions,
  UpdateQuery,
  UpdateWithAggregationPipeline,
  Document,
  ObjectId,
} from 'mongoose';

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

export type CreateModelResponse = {
  id: string;
  created: boolean;
};

export class Repository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(doc: object): Promise<CreateModelResponse> {
    // eslint-disable-next-line new-cap
    const createdEntity = new this.model(doc);
    const result = await createdEntity.save();

    return { id: result.id, created: !!result.id };
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
