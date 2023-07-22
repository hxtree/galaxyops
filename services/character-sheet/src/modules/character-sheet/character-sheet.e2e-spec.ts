import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  rootMongooseTestModule,
  MongooseModule,
  closeInMongodConnection,
} from '@cats-cradle/nestjs-modules';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { CharacterSheetService } from './character-sheet.service';
import { CharacterSheetSchema, CharacterSheet } from './character-sheet.schema';
import { CharacterSheetRepository } from './character-sheet.repository';
import { CharacterSheetController } from './character-sheet.controller';
import { Archetype } from '../../data/archetype/archetype';
import { PlaceService } from '../place/place.service';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';
import { CreateSpawnDto } from './create-spawn-dto';
import { SpawnService } from './spawn.service';

describe('/character-sheets', () => {
  let app: INestApplication;
  let characterSheetService: CharacterSheetService;
  let characterSheetRepository: CharacterSheetRepository;
  let placeService: PlaceService;
  let spawnService: SpawnService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: 'CharacterSheet', schema: CharacterSheetSchema },
        ]),
      ],
      providers: [
        PlaceService,
        CharacterSheetRepository,
        CharacterSheetService,
        SpawnService,
      ],
      controllers: [CharacterSheetController],
    }).compile();

    app = moduleRef.createNestApplication();
    characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
      CharacterSheetRepository,
    );
    characterSheetService = moduleRef.get<CharacterSheetService>(
      CharacterSheetService,
    );

    placeService = moduleRef.get<PlaceService>(PlaceService);
    spawnService = moduleRef.get<SpawnService>(SpawnService);

    await app.init();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('GET /character-sheets/:id', () => {
    it('should not find results that do not exists', async () => {
      const response = await supertest(app.getHttpServer())
        .get('/character-sheets/1f251943-174c-4ee0-87e4-0a52ed2eebbc')
        .expect(404);
      expect(response.body).toEqual({ message: 'Not Found', statusCode: 404 });
    });

    it('should find result if exists', async () => {
      const characterSheet = await FakerFactory.create<CharacterSheet>(
        CharacterSheet,
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .get(`/character-sheets/${characterSheet.id}`)
        .expect(200);
      // expect(result.body).toEqual(expect.objectContaining(characterSheet));
    });
  });

  describe('DELETE /character-sheets/:id', () => {
    it('should delete result if exists', async () => {
      const characterSheet = await FakerFactory.create<CharacterSheet>(
        CharacterSheet,
      );
      await characterSheetRepository.create(characterSheet);

      const result = await supertest(app.getHttpServer())
        .delete(`/character-sheets/${characterSheet.id}`)
        .expect(200);

      expect(result.body).toEqual(
        expect.objectContaining({
          deleted: true,
          deletedCount: 1,
        }),
      );
    });
  });

  describe('POST /character-sheets/spawn', () => {
    it('should create random spawn for given area', async () => {
      const body = await FakerFactory.create<CreateSpawnDto>(CreateSpawnDto);

      const result = await supertest(app.getHttpServer())
        .post('/character-sheets/spawn')
        .send(body)
        .expect(201);

      // expect(result.body).toEqual(
      //   expect.objectContaining({
      //     deleted: true,
      //     deletedCount: 1,
      //   }),
      // );
    });
  });
});
