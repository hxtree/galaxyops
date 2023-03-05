import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { INestApplication } from '@nestjs/common';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../mongoose/mongoose.module';
import { BookSchema } from './books/book.schema';
import { BooksRepository } from './books/book.repository';
import { CreateBookDto } from './books/create-book.dto';

describe('MongooseModule', () => {
  let app: INestApplication;
  let booksRepository: BooksRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
      ],
      providers: [BooksRepository],
    }).compile();

    app = moduleRef.createNestApplication();
    booksRepository = await moduleRef.get<BooksRepository>(BooksRepository);
    await app.init();
  });

  afterEach(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('repository', () => {
    it('should be able to create a model in database and find it', async () => {
      const book1: CreateBookDto = {
        name: 'Test Bible',
        price: '100.00',
        quantity: 1,
      };
      await booksRepository.create(book1);

      const result = await booksRepository.findByFilter('Test Bible', 1, 1);
      expect(result.data[0].price).toBe(book1.price);
      expect(result.data[0].quantity).toBe(book1.quantity);
    });
  });
});
