import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { INestApplication } from '@nestjs/common';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../mongoose/mongoose.module';
import { PersonSchema } from './persons/person.schema';
import { PersonRepository } from './persons/person.repository';

describe('MongooseRepository', () => {
  let app: INestApplication;
  let personsRepository: PersonRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
      ],
      providers: [PersonRepository],
    }).compile();

    app = moduleRef.createNestApplication();
    personsRepository = await moduleRef.get<PersonRepository>(PersonRepository);
    await app.init();
  });

  afterEach(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('findOne', () => {
    it('should find item in repository', async () => {
      await personsRepository.create({
        id: 'sss',
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const result = await personsRepository.findOne({
        firstName: 'Jane',
      });

      expect(result?.firstName).toBe('Jane');
      expect(result?.lastName).toBe('Doe');
    });
  });

  describe('findOneOrFail', () => {
    it('should find item in repository', async () => {
      await personsRepository.create({
        id: 'sss',
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const result = await personsRepository.findOneOrFail({
        firstName: 'Jane',
      });

      expect(result?.firstName).toBe('Jane');
      expect(result?.lastName).toBe('Doe');
    });

    it('should throw when item cannot be found', async () => {
      expect.assertions(1);

      try {
        const result = await personsRepository.findOneOrFail({
          firstName: 'Jon',
        });
      } catch (error) {
        const err = error as Error;
        expect(err.message).toBe('No results found');
      }
    });
  });
});
