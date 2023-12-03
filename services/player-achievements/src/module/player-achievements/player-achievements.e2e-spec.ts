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
  PlayerAchievement,
  PlayerAchievementSchema,
} from '../../models/player-achievement.schema';
import { PlayerAchievementRepository } from '../../models/player-achievement.repository';
import { PlayerAchievementController } from './player-achievements.controller';
import { CreateDto } from './create.dto';
import { AchievementRepository } from '../../models/achievement.repository';
import {
  Achievement,
  AchievementSchema,
} from '../../models/achievement.schema';

describe('/player-achievements', () => {
  let app: INestApplication;
  let achievementRepository: AchievementRepository;
  let playerAchievementRepository: PlayerAchievementRepository;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri: process.env.MONGO_DATABASE_URI,
          }),
        }),
        MongooseModule.forFeature([
          { name: 'PlayerAchievement', schema: PlayerAchievementSchema },
          { name: 'Achievement', schema: AchievementSchema },
        ]),
      ],
      providers: [PlayerAchievementRepository, AchievementRepository],
      controllers: [PlayerAchievementController],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );

    achievementRepository = moduleRef.get<AchievementRepository>(
      AchievementRepository,
    );
    playerAchievementRepository = moduleRef.get<PlayerAchievementRepository>(
      PlayerAchievementRepository,
    );

    await app.init();
  });

  afterEach(async () => {
    await playerAchievementRepository.deleteAll();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('GET /player-achievements', () => {
    it('should find same amount of results as exists', async () => {
      const achievement = await achievementRepository.create(
        await FakerFactory.create<Achievement>(
          Achievement,
          { createdAt: new Date().toISOString() },
          { optionals: false },
        ),
      );

      const records = await FakerFactory.createMany<PlayerAchievement>(
        PlayerAchievement,
        {
          achievementId: achievement!.id,
          createdAt: new Date().toISOString(),
        },
        { min: 1, max: 4, optionals: false },
      );

      await asyncForEach(
        records,
        async (playerAchievement: PlayerAchievement) => {
          await playerAchievementRepository.create(playerAchievement);
        },
      );

      const result = await supertest(app.getHttpServer())
        .get('/player-achievements')
        .expect(200);

      expect(result.body).toHaveLength(records.length);
    });
  });

  describe('GET /player-achievements/?id=', () => {
    it('should return empty array when no results exists', async () => {
      const id = v4();
      const response = await supertest(app.getHttpServer())
        .get(`/player-achievements/?id=${id}`)
        .expect(200);

      expect(response.body).toEqual([]);
    });

    it('should find result if exists', async () => {
      const playerAchievement = await playerAchievementRepository.create(
        await FakerFactory.create<PlayerAchievement>(
          PlayerAchievement,
          {},
          { optionals: false },
        ),
      );

      const result = await supertest(app.getHttpServer())
        .get(`/player-achievements/?id=${playerAchievement!.id}`)
        .expect(200);

      expect(result.body[0]).toMatchObject(
        expect.objectContaining({
          id: playerAchievement!.id,
          createdAt: playerAchievement!.createdAt,
        }),
      );
    });
  });

  describe('POST /player-achievements', () => {
    it('should create an player-achievements', async () => {
      const achievement = await achievementRepository.create(
        await FakerFactory.create<Achievement>(
          Achievement,
          {},
          { optionals: false },
        ),
      );
      const body = await FakerFactory.create<CreateDto>(
        CreateDto,
        { achievementId: achievement!.id },
        { optionals: false, pojo: true },
      );

      const response = await supertest(app.getHttpServer())
        .post('/player-achievements')
        .send(body)
        .expect(201);

      const playerAchievement = await playerAchievementRepository.findOneOrFail(
        {
          id: response.body.id,
        },
      );

      expect(response.body.id).toEqual(playerAchievement?.id);
      expect(playerAchievement?.createdAt).toBeDefined();
    });

    it('should create an playerAchievement when id supplied', async () => {
      const body = await FakerFactory.create<CreateDto>(
        CreateDto,
        {},
        { optionals: true, pojo: true },
      );

      const response = await supertest(app.getHttpServer())
        .post('/player-achievements')
        .send(body)
        .expect(201);

      const playerAchievement = await playerAchievementRepository.findOneOrFail(
        {
          id: response.body.id,
        },
      );

      expect(response.body.id).toEqual(playerAchievement?.id);
      expect(playerAchievement?.updatedAt).toBeDefined();
      expect(playerAchievement?.createdAt).toBeDefined();
    });
  });

  describe('DELETE /player-achievements', () => {
    it('should remove the specified player-achievements only', async () => {
      const records = await FakerFactory.createMany<PlayerAchievement>(
        PlayerAchievement,
        {},
        { min: 2, optionals: false },
      );

      let lastRecord;
      await asyncForEach(
        records,
        async (playerAchievement: PlayerAchievement) => {
          lastRecord =
            await playerAchievementRepository.create(playerAchievement);
        },
      );

      const response = await supertest(app.getHttpServer())
        .delete('/player-achievements')
        .send({ id: lastRecord!._id })
        .expect(200);

      const results = await playerAchievementRepository.findAll();

      expect(results).toHaveLength(records.length - 1);

      expect(response.body).toMatchObject({
        deletedCount: 1,
        deleted: true,
      });
    });
  });
});
