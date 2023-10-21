import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { PdfModule } from './pdf.module';
import { UrlToDataDto } from './url-to-data.dto';

describe('/pdf', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [PdfModule],
      providers: [],
      controllers: [],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  describe('POST /pdf/render-html-data', () => {
    it.skip('should render html page', async () => {
      const result = await supertest(app.getHttpServer())
        .post('/pdf/render-html-data')
        .send({
          html: '<html><head><title>Example Page</title><body>Example</body></html>',
        })
        .expect(201);

      expect(result.body).toEqual(
        expect.objectContaining({
          title: 'Example Page',
        }),
      );
    }, 15000);
  });
});
