import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { INestApplication } from '@nestjs/common';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../mongoose/mongoose.module';
import { PersonSchema } from '../__tests__/persons/person.schema';
import { PersonRepository } from '../__tests__/persons/person.repository';
import {
  IsDateString,
  IsUuidV4Validator,
} from '@cats-cradle/validation-schemas';

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

  describe('create', () => {
    it('should create item', async () => {
      const person = await personsRepository.create({
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const date = new Date();
      expect(IsUuidV4Validator(person!.id)).toBe(true);
      expect(IsUuidV4Validator(person!._id)).toBe(true);
      expect(person?.createdAt).toContain(date.getFullYear().toString());
      expect(person?.updatedAt).toContain(date.getFullYear().toString());
    });
  });

  describe('findOne', () => {
    it('should find item in repository by id', async () => {
      const person = await personsRepository.create({
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const result = await personsRepository.findOne({
        id: person!.id,
      });

      expect(result?.firstName).toBe(person?.firstName);
      expect(result?.lastName).toBe(person?.lastName);
    });

    it('should find item in repository by property', async () => {
      const person = await personsRepository.create({
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const result = await personsRepository.findOne({
        firstName: 'Jane',
      });

      expect(result?.firstName).toBe(person?.firstName);
      expect(result?.lastName).toBe(person?.lastName);
    });
  });

  describe('findOneOrFail', () => {
    it('should find item in repository', async () => {
      await personsRepository.create({
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
