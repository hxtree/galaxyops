import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FakerFactory } from '@galaxyops/faker-factory';
import { MongooseModule } from '@galaxyops/nestjs-modules';
import { v4 } from 'uuid';
import { MongoMemoryServer } from 'mongodb-memory-server-global';
import mongoose from 'mongoose';
import { AffiliationController } from './affiliation.controller';
import { AffiliationService } from './affiliation.service';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import {
  CharacterSheet,
  CharacterSheetSchema,
} from '../../models/character-sheet.schema';
import { Operation, UpdateAffiliationDto } from './update-affiliation.dto';

describe('/affiliations', () => {
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
      controllers: [AffiliationController],
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri,
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
      providers: [CharacterSheetRepository, AffiliationService],
    }).compile();

    const app: INestApplication = moduleRef.createNestApplication();
    await app.init();

    return { app, moduleRef } as const;
  }

  it('/GET /affiliations/:id', async () => {
    const { app, moduleRef } = await createTestingModule();
    const characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
      CharacterSheetRepository,
    );

    const characterSheet = await FakerFactory.create<CharacterSheet>(
      CharacterSheet,
      { archetypeId: 'MEEKU_ONI' },
    );
    await characterSheetRepository.create(characterSheet);

    const response = await supertest(app.getHttpServer())
      .get(`/affiliations/${characterSheet._id}`)
      .expect(200);

    expect(response.body).toMatchObject(characterSheet.affiliation);

    await app.close();
  });

  it('/POST /affiliations/:id', async () => {
    const { app, moduleRef } = await createTestingModule();
    const characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
      CharacterSheetRepository,
    );

    const characterSheet = await characterSheetRepository.create(
      await FakerFactory.create<CharacterSheet>(CharacterSheet, {
        affiliation: [{ affiliationId: 'THE_CATS', amount: 10 }],
        archetypeId: 'MEEKU_ONI',
      }),
    );

    const body = await FakerFactory.create<UpdateAffiliationDto>(
      UpdateAffiliationDto,
      {
        affiliationId: 'THE_CATS',
        characterSheetId: characterSheet!.id,
        operation: Operation.ADD,
        value: 10,
      },
    );

    const response = await supertest(app.getHttpServer())
      .post('/affiliations')
      .send(body)
      .expect(201);

    expect(response.body).toMatchObject({
      acknowledged: true,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0,
      upsertedId: null,
    });

    await app.close();
  });
});
