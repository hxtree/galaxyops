import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SkillModule } from './skill.module';
import { SkillService } from './skill.service';

describe('/skills', () => {
  let app: INestApplication;
  let skillService: SkillService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [SkillModule],
    }).compile();

    app = moduleRef.createNestApplication();
    skillService = moduleRef.get<SkillService>(SkillService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('/GET /skills', async () => {
    await supertest(app.getHttpServer())
      .get('/skills')
      .expect(200)
      .expect(await skillService.list());
  });

  it('/GET /skills/:id', async () => {
    await supertest(app.getHttpServer())
      .get('/skills/JUMP')
      .expect(200)
      .expect(await skillService.find('JUMP'));
  });
});
