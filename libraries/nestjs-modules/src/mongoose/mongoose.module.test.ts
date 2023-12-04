import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { INestApplication } from '@nestjs/common';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from './mongoose.module';
import { BookSchema } from '../__tests__/books/book.schema';
import { BookRepository } from '../__tests__/books/book.repository';
import { CreateBookDto } from '../__tests__/books/create-book.dto';

describe('MongooseModule', () => {
  let app: INestApplication;
  let bookRepository: BookRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
      ],
      providers: [BookRepository],
    }).compile();

    app = moduleRef.createNestApplication();
    bookRepository = await moduleRef.get<BookRepository>(BookRepository);
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
      await bookRepository.create(book1);

      const result = await bookRepository.find({ name: 'Test Bible' });
      expect(result[0].price).toBe(book1.price);
      expect(result[0].quantity).toBe(book1.quantity);
    });
  });
});
