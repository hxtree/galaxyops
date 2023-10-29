import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  rootMongooseTestModule,
  MongooseModule,
  closeInMongodConnection,
} from '@cats-cradle/nestjs-modules';
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
import { Archetype } from '../../data/archetype';

describe('/character-sheets', () => {
  let app: INestApplication;
  let characterSheetRepository: CharacterSheetRepository;
  let placeService: PlaceService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: 'CharacterSheet', schema: CharacterSheetSchema },
        ]),
      ],
      providers: [PlaceService, CharacterSheetRepository],
      controllers: [CharacterSheetController],
    }).compile();

    app = moduleRef.createNestApplication();
    characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
      CharacterSheetRepository,
    );

    placeService = moduleRef.get<PlaceService>(PlaceService);

    await app.init();
  });

  afterEach(async () => {
    await characterSheetRepository.deleteAll();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('GET /character-sheets/:id', () => {
    it('should not find results that do not exists', async () => {
      const response = await supertest(app.getHttpServer())
        .get(`/character-sheets/${v4()}`)
        .expect(404);
      expect(response.body).toEqual({ message: 'Not Found', statusCode: 404 });
    });

    it('should find result if exists', async () => {
      const characterSheet = await FakerFactory.create<CharacterSheet>(
        CharacterSheet,
        { archetypeId: 'MEEKU_ONI' },
        { optionals: false, pojo: true },
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .get(`/character-sheets/${characterSheet._id}`)
        .expect(200);

      expect(result.body).toEqual(
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
    });
  });

  describe('GET /character-sheets/?name=MEEKU_ONI', () => {
    it('should not find results that do not exists', async () => {
      const response = await supertest(app.getHttpServer())
        .get('/character-sheets/?name=MEEKU_ONI')
        .expect(200);
      expect(response.body).toEqual([]);
    });

    it('should find result if exists', async () => {
      const characterSheet = await FakerFactory.create<CharacterSheet>(
        CharacterSheet,
        { name: 'JANE' },
        { optionals: true },
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .get('/character-sheets/?name=JANE')
        .expect(200);

      expect(result.body[0]).toEqual(
        expect.objectContaining({
          id: characterSheet._id,
          instanceId: characterSheet.instanceId,
          archetypeId: characterSheet.archetypeId,
          name: characterSheet.name,
          surname: characterSheet.surname,
        }),
      );
    });
  });

  describe('DELETE /character-sheets/:id', () => {
    it('should delete result if exists', async () => {
      const characterSheet = await FakerFactory.create<CreateCharacterSheetDto>(
        CreateCharacterSheetDto,
        {},
        { optionals: true },
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .delete(`/character-sheets/${characterSheet._id}`)
        .expect(200);

      expect(result.body).toEqual(
        expect.objectContaining({
          deleted: true,
          deletedCount: 1,
        }),
      );
    });
  });
});
