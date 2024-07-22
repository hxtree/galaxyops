import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@galaxyops/nestjs-modules';
import { FakerFactory } from '@galaxyops/faker-factory';
import { v4 } from 'uuid';
import { CharacterSheetSchema } from '../../models/character-sheet.schema';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { NpcController } from './npc.controller';
import { PlaceService } from '../place/place.service';
import { CreateSpawnDto } from './create-spawn-dto';
import { SpawnService } from './spawn.service';

describe('/spawns', () => {
  async function createTestingModule() {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [NpcController],
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
      providers: [PlaceService, CharacterSheetRepository, SpawnService],
    }).compile();

    const app: INestApplication = moduleRef.createNestApplication();
    await app.init();

    return { app, moduleRef } as const;
  }

  describe('POST /npcs', () => {
    it('should create random spawn for given area', async () => {
      const { app } = await createTestingModule();

      const body = await FakerFactory.create<CreateSpawnDto>(CreateSpawnDto, {
        place: 'ENDERS_LAND',
      });

      const result = await supertest(app.getHttpServer())
        .post('/npcs')
        .send(body)
        .expect(201);

      expect(result.body).toHaveProperty('id');
      expect(result.body).toHaveProperty('instanceId', body.instanceId);
      expect(result.body).toHaveProperty('archetypeId', 'SENSITIVE_PLANT');

      await app.close();
    });
  });
});
