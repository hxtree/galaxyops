import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TemplateModule } from './template.module';
import { TemplateService } from './template.service';

describe('/templates', () => {
  let app: INestApplication;
  let templateService: TemplateService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [TemplateModule],
    }).compile();

    app = moduleRef.createNestApplication();
    templateService = moduleRef.get<TemplateService>(TemplateService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('GET /templates', async () => {
    await supertest(app.getHttpServer())
      .get('/templates')
      .expect(200)
      .expect(await templateService.findAll());
  });
});
