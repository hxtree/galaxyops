import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ArchetypeModule } from './archetype.module';
import { ArchetypeService } from './archetype.service';

describe('/archetypes', () => {
  let app: INestApplication;
  let archetypeService: ArchetypeService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [ArchetypeModule],
    }).compile();

    app = moduleRef.createNestApplication();
    archetypeService = moduleRef.get<ArchetypeService>(ArchetypeService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('/GET /archetypes', async () => {
    await supertest(app.getHttpServer())
      .get('/archetypes')
      .expect(200)
      .expect(await archetypeService.findAll());
  });

  it('/GET /archetypes/:id', async () => {
    const archetype = await archetypeService.find('MOTHER');
    archetype.id = 'MOTHER';
    await supertest(app.getHttpServer())
      .get('/archetypes/MOTHER')
      .expect(200)
      .expect(archetype);
  });
});
