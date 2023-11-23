import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  MongooseModule,
  closeInMongodConnection,
  asyncForEach,
} from '@cats-cradle/nestjs-modules';
import { FakerFactory, toPojo } from '@cats-cradle/faker-factory';
import { v4 } from 'uuid';
import {
  PlayerAchievementsSchema,
  PlayerAchievements,
} from '../../models/player-achievements.schema';
import { PlayerAchievementsRepository } from '../../models/player-achievements.repository';
import { PlayerAchievementsController } from './player-achievements.controller';
import { CreateDto } from './create.dto';

describe('/player-achievements', () => {
  let app: INestApplication;
  let playerAchievementsRepository: PlayerAchievementsRepository;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri: process.env.MONGO_DATABASE_URI,
          }),
        }),
        MongooseModule.forFeature([
          { name: 'PlayerAchievements', schema: PlayerAchievementsSchema },
        ]),
      ],
      providers: [PlayerAchievementsRepository],
      controllers: [PlayerAchievementsController],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );

    playerAchievementsRepository = moduleRef.get<PlayerAchievementsRepository>(
      PlayerAchievementsRepository,
    );

    await app.init();
  });

  afterEach(async () => {
    await playerAchievementsRepository.deleteAll();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('GET /player-achievements', () => {
    it('should find same amount of results as exists', async () => {
      const records = await FakerFactory.createMany<PlayerAchievements>(
        PlayerAchievements,
        { createdAt: new Date().toISOString() },
        { min: 1, max: 4, optionals: false },
      );

      await asyncForEach(
        records,
        async (playerAchievements: PlayerAchievements) => {
          await playerAchievementsRepository.create(playerAchievements);
        },
      );

      const result = await supertest(app.getHttpServer())
        .get('/player-achievements')
        .expect(200);

      expect(result.body).toHaveLength(records.length);
    });
  });

  describe('GET /player-achievements/?id=', () => {
    it.skip('should not found when no results exists', async () => {
      const id = v4();
      const response = await supertest(app.getHttpServer())
        .get(`/player-achievements/?id=${id}`)
        .expect(404);
      expect(response.body).toMatchObject({
        error: 'Not Found',
        message: expect.stringContaining(
          `Cannot GET /player-achievements/?id=${id}`,
        ),
        statusCode: 404,
      });
    });

    it('should find result if exists', async () => {
      const playerAchievements = await FakerFactory.create<PlayerAchievements>(
        PlayerAchievements,
        {},
        { optionals: false },
      );
      await playerAchievementsRepository.create(playerAchievements);

      const result = await supertest(app.getHttpServer())
        .get(`/player-achievements/?id=${playerAchievements._id}`)
        .expect(200);

      expect(result.body[0]).toMatchObject(
        expect.objectContaining({
          id: playerAchievements._id,
          createdAt: playerAchievements.createdAt,
        }),
      );
    });
  });

  describe('POST /player-achievements', () => {
    it('should create an player-achievements when id not supplied', async () => {
      const body = await FakerFactory.create<CreateDto>(
        CreateDto,
        {},
        { optionals: false, pojo: true },
      );

      const response = await supertest(app.getHttpServer())
        .post('/player-achievements')
        .send(body)
        .expect(201);

      const playerAchievements = await playerAchievementsRepository.findOneOrFail({
        id: body.id,
      });

      expect(response.body.id).toEqual(playerAchievements?._id);
      expect(playerAchievements?.createdAt).toBeDefined();
    });

    it('should create an playerAchievements when id supplied', async () => {
      const body = await FakerFactory.create<CreateDto>(
        CreateDto,
        {},
        { optionals: true, pojo: true },
      );

      const response = await supertest(app.getHttpServer())
        .post('/player-achievements')
        .send(body)
        .expect(201);

      const playerAchievements = await playerAchievementsRepository.findOneOrFail({
        id: body.id,
      });

      expect(response.body.id).toEqual(body.id);
      expect(response.body.id).toEqual(playerAchievements?._id);
      expect(playerAchievements?._id).toEqual(body.id);
      expect(playerAchievements?.createdAt).toBeDefined();
    });
  });

  describe('DELETE /player-achievements', () => {
    it.skip('should remove the specified player-achievements only', async () => {
      const record = await FakerFactory.createMany<PlayerAchievements>(
        PlayerAchievements,
        {},
        { min: 2, optionals: false },
      );

      await asyncForEach(
        record,
        async (playerAchievements: PlayerAchievements) => {
          await playerAchievementsRepository.create(playerAchievements);
        },
      );

      const response = await supertest(app.getHttpServer())
        .delete('/playerAchievements')
        .send({ id: record[0]._id })
        .expect(200);

      const results = await playerAchievementsRepository.findAll();

      expect(results).toHaveLength(record.length - 1);

      expect(response.body).toMatchObject({
        deletedCount: 1,
        deleted: true,
      });
    });
  });
});
