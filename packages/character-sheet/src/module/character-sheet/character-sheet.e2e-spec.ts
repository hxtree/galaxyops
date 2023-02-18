import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  rootMongooseTestModule,
  MongooseModule,
  closeInMongodConnection,
} from '@cats-cradle/nestjs-modules';
import { CharacterSheetService } from './character-sheet.service';
import { CharacterSheetSchema } from './character-sheet.schema';
import { CharacterSheetRepository } from './character-sheet.repository';

describe('/character-sheets', () => {
  let app: INestApplication;
  let characterSheetService: CharacterSheetService;
  let characterSheetRepository: CharacterSheetRepository;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: 'CharacterSheet', schema: CharacterSheetSchema },
        ]),
      ],
      providers: [CharacterSheetRepository, CharacterSheetService],
    }).compile();

    app = moduleRef.createNestApplication();
    characterSheetRepository = moduleRef.get<CharacterSheetRepository>(
      CharacterSheetRepository,
    );
    characterSheetService = moduleRef.get<CharacterSheetService>(
      CharacterSheetService,
    );

    await app.init();
  });

  afterEach(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('/GET /character-sheets/:id', () => {
    it('should not find results that do not exists', async () => {
      await supertest(app.getHttpServer())
        .get('/character-sheets/1f251943-174c-4ee0-87e4-0a52ed2eebbc')
        .expect(404);
    });
  });
});
