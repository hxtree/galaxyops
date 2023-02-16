import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PaginateModel, IPaginateResult } from 'mongoose';
import { TBookDocument, Book } from './book.schema';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksRepository {
  constructor(
    @InjectModel(Book.name)
    private BookModel: PaginateModel<TBookDocument>,
  ) {}

  async findAll(
    page: number,
    size: number,
  ): Promise<IPaginateResult<TBookDocument>> {
    const conditions = {};
    const options = {
      perPage: size,
      page,
      lean: true,
    };
    return this.BookModel.paginate(conditions, options);
  }

  async findById(id: number): Promise<IPaginateResult<TBookDocument>> {
    const conditions = {
      id,
    };
    const options = {
      lean: true,
    };
    return this.BookModel.paginate(conditions, options);
  }

  async findByFilter(
    search: string,
    page: number,
    size: number,
  ): Promise<IPaginateResult<TBookDocument>> {
    const conditions = {
      $or: [{ brand: { $regex: search } }, { description: { $regex: search } }],
    };
    const options = {
      perPage: size,
      page,
      lean: true,
    };
    return this.BookModel.paginate(conditions, options);
  }

  async create(book: CreateBookDto): Promise<TBookDocument> {
    const createdBook = new this.BookModel(book);
    return createdBook.save();
  }
}
