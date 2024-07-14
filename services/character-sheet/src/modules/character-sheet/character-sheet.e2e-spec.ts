import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { v4 } from 'uuid';
import {
  CharacterSheetSchema,
  CharacterSheet,
} from '../../models/character-sheet.schema';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheetController } from './character-sheet.controller';
import { PlaceService } from '../place/place.service';

describe('/character-sheets', () => {
  async function createTestingModule() {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CharacterSheetController],
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri: process.env.MONGO_DATABASE_URI,
          }),
        }),
        MongooseModule.forFeature([
          {
            collection: `test-${v4()}`,
            name: 'CharacterSheet',
            schema: CharacterSheetSchema,
          },
        ]),
      ],
      providers: [PlaceService, CharacterSheetRepository],
    }).compile();

    const app: INestApplication = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );

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
      const characterSheet = await characterSheetRepository.create(
        await FakerFactory.create<CharacterSheet>(
          CharacterSheet,
          { archetypeId: 'MEEKU_ONI', name: 'Meeku', surname: 'Oni' },
          { optionals: false, pojo: true },
        ),
      );

      const result = await supertest(app.getHttpServer())
        .get(`/character-sheets/${characterSheet!.id}`)
        .expect(200);

      expect(result.body).toHaveProperty('id', characterSheet!.id);
      expect(result.body).toHaveProperty(
        'instanceId',
        characterSheet!.instanceId,
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

      const characterSheet = await characterSheetRepository.create(
        await FakerFactory.create<CharacterSheet>(
          CharacterSheet,
          { name: 'JANE' },
          { optionals: true },
        ),
      );

      const result = await supertest(app.getHttpServer())
        .get('/character-sheets/?name=JANE')
        .expect(200);

      expect(result.body[0]).toMatchObject(
        expect.objectContaining({
          archetypeId: characterSheet!.archetypeId,
          id: characterSheet!.id,
          instanceId: characterSheet!.instanceId,
          name: characterSheet!.name,
          surname: characterSheet!.surname,
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

      const characterSheet = await characterSheetRepository.create(
        await FakerFactory.create<CreateCharacterSheetDto>(
          CreateCharacterSheetDto,
          {},
          { optionals: true },
        ),
      );

      const result = await supertest(app.getHttpServer())
        .delete(`/character-sheets/${characterSheet!._id}`)
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
