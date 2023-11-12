import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { v4 } from 'uuid';
import { MongoMemoryServer } from 'mongodb-memory-server-global';
import mongoose from 'mongoose';
import {
  CharacterSheetSchema,
  CharacterSheet,
} from '../../models/character-sheet.schema';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheetController } from './character-sheet.controller';
import { PlaceService } from '../place/place.service';
import { Archetype } from '../../data/archetype';

describe('/character-sheets', () => {
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    if (mongod) await mongod.stop();
  });

  async function createTestingModule() {
    const uri = mongod.getUri();

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri,
          }),
        }),
        MongooseModule.forFeature([
          {
            name: 'CharacterSheet',
            schema: CharacterSheetSchema,
            collection: `test-${v4()}`,
          },
        ]),
      ],
      providers: [PlaceService, CharacterSheetRepository],
      controllers: [CharacterSheetController],
    }).compile();

    const app: INestApplication = moduleRef.createNestApplication();
    await app.init();

    return { app, moduleRef } as const;
  }

  describe('GET /character-sheets/:id', () => {
    it('should not find results that do not exists', async () => {
      const { app } = await createTestingModule();

      const response = await supertest(app.getHttpServer())
        .get(`/character-sheets/${v4()}`)
        .expect(404);

      expect(response.body).toMatchObject({
        message: 'Not Found',
        statusCode: 404,
      });

      await app.close();
    });

    it('should find result if exists', async () => {
      const { app, moduleRef } = await createTestingModule();

      const characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
        CharacterSheetRepository,
      );
      const characterSheet = await FakerFactory.create<CharacterSheet>(
        CharacterSheet,
        { archetypeId: 'MEEKU_ONI', name: 'Meeku', surname: 'Oni' },
        { optionals: false, pojo: true },
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .get(`/character-sheets/${characterSheet._id}`)
        .expect(200);

      expect(result.body).toMatchObject(
        expect.objectContaining({
          id: characterSheet._id,
          instanceId: characterSheet.instanceId,
          archetypeId: characterSheet.archetypeId,
          name: characterSheet.name,
          surname: characterSheet.surname,
          traits: Archetype.MEEKU_ONI.traits,
          disciplines: characterSheet.disciplines,
          equipment: characterSheet.equipment,
        }),
      );
      await app.close();
    });
  });

  describe('GET /character-sheets/?name=MEEKU_ONI', () => {
    it('should not find results that do not exists', async () => {
      const { app } = await createTestingModule();

      const response = await supertest(app.getHttpServer())
        .get('/character-sheets/?name=MEEKU_ONI')
        .expect(200);
      expect(response.body).toMatchObject([]);

      await app.close();
    });

    it('should find result if exists', async () => {
      const { app, moduleRef } = await createTestingModule();

      const characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
        CharacterSheetRepository,
      );

      const characterSheet = await FakerFactory.create<CharacterSheet>(
        CharacterSheet,
        { name: 'JANE' },
        { optionals: true },
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .get('/character-sheets/?name=JANE')
        .expect(200);

      expect(result.body[0]).toMatchObject(
        expect.objectContaining({
          id: characterSheet._id,
          instanceId: characterSheet.instanceId,
          archetypeId: characterSheet.archetypeId,
          name: characterSheet.name,
          surname: characterSheet.surname,
        }),
      );
      await app.close();
    });
  });

  describe('DELETE /character-sheets/:id', () => {
    it('should delete result if exists', async () => {
      const { app, moduleRef } = await createTestingModule();

      const characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
        CharacterSheetRepository,
      );

      const characterSheet = await FakerFactory.create<CreateCharacterSheetDto>(
        CreateCharacterSheetDto,
        {},
        { optionals: true },
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .delete(`/character-sheets/${characterSheet._id}`)
        .expect(200);

      expect(result.body).toMatchObject(
        expect.objectContaining({
          deleted: true,
          deletedCount: 1,
        }),
      );

      await app.close();
    });
  });
});
