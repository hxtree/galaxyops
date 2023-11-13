import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { MongoMemoryServer } from 'mongodb-memory-server-global';
import mongoose from 'mongoose';
import { v4 } from 'uuid';
import { CharacterSheetSchema } from '../../models/character-sheet.schema';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { NpcController } from './npc.controller';
import { PlaceService } from '../place/place.service';
import { CreateSpawnDto } from './create-spawn-dto';
import { SpawnService } from './spawn.service';

describe('/spawns', () => {
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
      providers: [PlaceService, CharacterSheetRepository, SpawnService],
      controllers: [NpcController],
    }).compile();

    const app: INestApplication = moduleRef.createNestApplication();
    await app.init();

    return { app, moduleRef } as const;
  }

  describe('POST /npcs', () => {
    it('should create random spawn for given area', async () => {
      const { app } = await createTestingModule();

      const body = await FakerFactory.create<CreateSpawnDto>(CreateSpawnDto);
      body.place = 'ENDERS_LAND';

      const result = await supertest(app.getHttpServer())
        .post('/npcs')
        .send(body)
        .expect(201);

      expect(result.body).toMatchObject(
        expect.objectContaining({
          id: body.id,
          instanceId: body.instanceId,
          archetypeId: 'SENSITIVE_PLANT',
        }),
      );

      await app.close();
    });
  });
});
