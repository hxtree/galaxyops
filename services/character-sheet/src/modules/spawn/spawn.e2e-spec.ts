import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  rootMongooseTestModule,
  MongooseModule,
  closeInMongodConnection,
} from '@cats-cradle/nestjs-modules';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { CharacterSheetService } from '../character-sheet/character-sheet.service';
import { CharacterSheetSchema } from '../character-sheet/character-sheet.schema';
import { CharacterSheetRepository } from '../character-sheet/character-sheet.repository';
import { SpawnController } from './spawn.controller';
import { PlaceService } from '../place/place.service';
import { CreateSpawnDto } from './create-spawn-dto';
import { SpawnService } from './spawn.service';

describe('/spawns', () => {
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
      controllers: [SpawnController],
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

  describe('POST /spawns', () => {
    it('should create random spawn for given area', async () => {
      const body = await FakerFactory.create<CreateSpawnDto>(CreateSpawnDto);

      const result = await supertest(app.getHttpServer())
        .post('/spawns')
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
