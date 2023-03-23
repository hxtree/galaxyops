import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { PdfModule } from './pdf.module';

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

  describe('GET /pdf/:id', () => {
    it('todo add unit test', async () => {
      const response = '1';
      expect(response).toEqual('1');
    });
  });
});
