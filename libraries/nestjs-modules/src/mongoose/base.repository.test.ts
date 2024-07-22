import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { INestApplication } from '@nestjs/common';
import { IsUuidV4Validator } from '@galaxyops/validation-schemas';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from './mongoose.module';
import { Person, PersonSchema } from '../__tests__/persons/person.schema';
import { PersonRepository } from '../__tests__/persons/person.repository';
import { StudentRepository } from '../__tests__/persons/student.repository';
import { Student, StudentSchema } from '../__tests__/persons/student.schema';

describe('MongooseRepository', () => {
  let app: INestApplication;
  let personRepository: PersonRepository;
  let studentRepository: StudentRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
        MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
      ],
      providers: [PersonRepository, StudentRepository],
    }).compile();

    app = moduleRef.createNestApplication();
    personRepository = await moduleRef.get<PersonRepository>(PersonRepository);
    studentRepository = await moduleRef.get<StudentRepository>(StudentRepository);
    await app.init();
  });

  afterEach(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('create', () => {
    it('should create item', async () => {
      const person = await personRepository.create({
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

  describe('findById', () => {
    it('should populate given props', async () => {
      const person = await personRepository.create(
        new Person({
          firstName: 'Jane',
          lastName: 'Doe',
        }),
      );

      const student = await studentRepository.create(
        new Student({
          studentNo: 'M-44993',
          person: person!.id,
        }),
      );

      const result = await studentRepository.findById(student!._id, {
        populate: 'person',
      });

      const date = new Date();
      expect(result).toBeTruthy();
      expect(IsUuidV4Validator(result!._id)).toBe(true);
      expect(result?.createdAt).toContain(date.getFullYear().toString());
      expect(result?.updatedAt).toContain(date.getFullYear().toString());
      expect(result.person).toBeTruthy();
      expect(IsUuidV4Validator(result.person!._id)).toBe(true);
      expect(result.person?.firstName).toBe('Jane');
      expect(result.person?.lastName).toBe('Doe');
      expect(result.person?.createdAt).toContain(date.getFullYear().toString());
      expect(result.person?.updatedAt).toContain(date.getFullYear().toString());
    });
  });

  describe('findOne', () => {
    it('should populate given props', async () => {
      const person = await personRepository.create(
        new Person({
          firstName: 'Jane',
          lastName: 'Doe',
        }),
      );

      const student = await studentRepository.create(
        new Student({
          studentNo: 'M-44993',
          person: person!.id,
        }),
      );

      const result = await studentRepository.findOne(
        { id: student!._id },
        { populate: 'person' },
      );

      const date = new Date();
      expect(result).toBeTruthy();
      expect(IsUuidV4Validator(result!._id)).toBe(true);
      expect(result?.createdAt).toContain(date.getFullYear().toString());
      expect(result?.updatedAt).toContain(date.getFullYear().toString());
      expect(result.person).toBeTruthy();
      expect(IsUuidV4Validator(result.person!._id)).toBe(true);
      expect(result.person?.firstName).toBe('Jane');
      expect(result.person?.lastName).toBe('Doe');
      expect(result.person?.createdAt).toContain(date.getFullYear().toString());
      expect(result.person?.updatedAt).toContain(date.getFullYear().toString());
    });

    it('should find item in repository by id', async () => {
      const person = await personRepository.create({
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const result = await personRepository.findOne({
        id: person!.id,
      });

      expect(result?.firstName).toBe(person?.firstName);
      expect(result?.lastName).toBe(person?.lastName);
    });

    it('should find item in repository by property', async () => {
      const person = await personRepository.create({
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const result = await personRepository.findOne({
        firstName: 'Jane',
      });

      expect(result?.firstName).toBe(person?.firstName);
      expect(result?.lastName).toBe(person?.lastName);
    });
  });

  describe('findOneOrFail', () => {
    it('should find item in repository', async () => {
      await personRepository.create({
        firstName: 'Jane',
        lastName: 'Doe',
      });

      const result = await personRepository.findOneOrFail({
        firstName: 'Jane',
      });

      expect(result?.firstName).toBe('Jane');
      expect(result?.lastName).toBe('Doe');
    });

    it('should throw when item cannot be found', async () => {
      expect.assertions(1);

      try {
        const result = await personRepository.findOneOrFail({
          firstName: 'Jon',
        });
      } catch (error) {
        const err = error as Error;
        expect(err.message).toBe('No results found');
      }
    });
  });
});
