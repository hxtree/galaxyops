import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { MongooseModule } from '@cats-cradle/nestjs-modules';
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
      providers: [CharacterSheetRepository, AffiliationService],
      controllers: [AffiliationController],
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
        archetypeId: 'MEEKU_ONI',
        affiliation: [{ affiliationId: 'THE_CATS', amount: 10 }],
      }),
    );

    const body = await FakerFactory.create<UpdateAffiliationDto>(
      UpdateAffiliationDto,
      {
        characterSheetId: characterSheet!.id,
        affiliationId: 'THE_CATS',
        value: 10,
        operation: Operation.ADD,
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
