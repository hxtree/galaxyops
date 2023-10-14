import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { PdfModule } from './pdf.module';
import { UrlToDataDto } from './url-to-data.dto';

describe('/pdf', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [PdfModule],
      providers: [],
      controllers: [],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  describe('POST /pdf/url-to-data', () => {
    it('todo add unit test', async () => {
      const result = await supertest(app.getHttpServer())
        .post('/pdf/data-url')
        .send({ url: 'http://example.com' })
        .expect(201);

      expect(result.body).toEqual(
        expect.objectContaining({
          title: 'Example Domain',
        }),
      );
    });
  });
});
