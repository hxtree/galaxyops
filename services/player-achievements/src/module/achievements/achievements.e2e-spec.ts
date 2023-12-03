import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { MongooseModule, asyncForEach } from '@cats-cradle/nestjs-modules';
import { FakerFactory, toPojo } from '@cats-cradle/faker-factory';
import { v4 } from 'uuid';
import {
  AchievementSchema,
  Achievement,
} from '../../models/achievement.schema';
import { AchievementRepository } from '../../models/achievement.repository';
import { AchievementController } from './achievements.controller';

describe('/achievements', () => {
  async function createTestingModule() {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri: process.env.MONGO_DATABASE_URI,
          }),
        }),
        MongooseModule.forFeature([
          {
            name: 'Achievement',
            schema: AchievementSchema,
            collection: `test-${v4()}`,
          },
        ]),
      ],
      providers: [AchievementRepository],
      controllers: [AchievementController],
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

  describe('GET /achievements', () => {
    it('should find same amount of results as exists', async () => {
      const { app, moduleRef } = await createTestingModule();
      const achievementRepository = moduleRef.get<AchievementRepository>(
        AchievementRepository,
      );

      const records = await FakerFactory.createMany<Achievement>(
        Achievement,
        {
          createdAt: new Date().toISOString(),
        },
        { min: 1, max: 4, optionals: false },
      );

      await asyncForEach(records, async (achievement: Achievement) => {
        await achievementRepository.create(achievement);
      });

      const result = await supertest(app.getHttpServer())
        .get('/achievements')
        .expect(200);

      expect(result.body).toHaveLength(records.length);

      await app.close();
    });
  });

  describe('GET /achievements/?id=', () => {
    it('should return empty array when no results exists', async () => {
      const { app } = await createTestingModule();

      const id = v4();
      const response = await supertest(app.getHttpServer())
        .get(`/achievements/?id=${id}`)
        .expect(200);

      expect(response.body).toEqual([]);

      await app.close();
    });

    it('should find result if exists', async () => {
      const { app, moduleRef } = await createTestingModule();
      const achievementRepository = moduleRef.get<AchievementRepository>(
        AchievementRepository,
      );

      const achievement = await achievementRepository.create(
        await FakerFactory.create<Achievement>(
          Achievement,
          {},
          { optionals: false },
        ),
      );

      const result = await supertest(app.getHttpServer())
        .get(`/achievements/?id=${achievement!.id}`)
        .expect(200);

      expect(result.body[0]).toMatchObject(
        expect.objectContaining(achievement?.toJSON()),
      );

      await app.close();
    });
  });
});
