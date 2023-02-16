import { Test, TestingModule } from '@nestjs/testing';
// import * as supertest from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { INestApplication } from '@nestjs/common';
import { closeInMongodConnection, rootMongooseTestModule } from '../mongo';
import { Book, BookSchema } from './books/book.schema';
import { BooksRepository } from './books/book.repository';
import { CreateBookDto } from './books/create-book.dto';

describe('MongoMemoryFactory', () => {
  let app: INestApplication;
  let booksRepository: BooksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
      ],
      providers: [BooksRepository],
    }).compile();

    app = module.createNestApplication();
    booksRepository = await module.get<BooksRepository>(BooksRepository);
    await app.init();
  });

  afterEach(async () => {
    closeInMongodConnection();
  });

  describe('findOne', () => {
    it('should find a a model saved to database', async () => {
      const book1: CreateBookDto = {
        name: 'Test Bible',
        price: '100.00',
        quantity: 1,
      };

      booksRepository.create(book1);

      // TODO improve repository
      const result = await booksRepository.findAll(1, 1);

      expect(result?.data).toBe(book1.price);
      expect(result?.data).toBe(book1.quantity);
    });
  });
});
