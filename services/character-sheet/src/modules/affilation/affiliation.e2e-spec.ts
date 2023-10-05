import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
  MongooseModule,
} from '@cats-cradle/nestjs-modules';
import { AffiliationController } from './affiliation.controller';
import { AffiliationService } from './affiliation.service';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheet, CharacterSheetSchema } from '../../models/character-sheet.schema';

describe('/affiliations', () => {
  let app: INestApplication;
  let affiliationService: AffiliationService;
  let characterSheetRepository: CharacterSheetRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: 'CharacterSheet', schema: CharacterSheetSchema },
        ]),
      ],
      providers: [CharacterSheetRepository, AffiliationService],
      controllers: [AffiliationController],
    }).compile();

    app = moduleRef.createNestApplication();
    affiliationService = moduleRef.get<AffiliationService>(AffiliationService);
    characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
      CharacterSheetRepository,
    );
    await app.init();
  });

  afterEach(async () => {
    await characterSheetRepository.deleteAll();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    await app.close();
  });

  it('/GET /affiliations/:id', async () => {
    const characterSheet = await FakerFactory.create<CharacterSheet>(
      CharacterSheet,
      { archetypeId: 'MEEKU_ONI' },
    );
    await characterSheetRepository.create(characterSheet);

    const response = await supertest(app.getHttpServer())
      .get(`/affiliations/${characterSheet._id}`)
      .expect(200);

    expect(response.body).toEqual(characterSheet.affiliation);
  });
});
