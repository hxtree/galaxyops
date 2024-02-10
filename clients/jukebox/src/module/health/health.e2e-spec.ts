import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HealthModule } from './health.module';

describe('/health', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [HealthModule],
      providers: [],
      controllers: [],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  describe('GET /health', () => {
    it('should 200 with status ok', async () => {
      const response = await supertest(app.getHttpServer())
        .get('/health')
        .expect(200);
      expect(response.text).toBe(
        '{"status":"ok","info":{},"error":{},"details":{}}',
      );
    });
  });
});
