import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Injectable } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { ClimateType } from './climates.type';
import { QueryDto } from './query.dto';

describe('/weather', () => {
  let app: INestApplication;
  let weatherService: WeatherService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [WeatherController],
      providers: [WeatherService],
    }).compile();

    app = moduleRef.createNestApplication();

    weatherService = moduleRef.get<WeatherService>(WeatherService);

    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  describe('POST /weather', () => {
    it('should determine climate', async () => {
      const body = await FakerFactory.create<QueryDto>(QueryDto, {
        // longitude: '0',
      });
      console.log(body);
      console.log(body);

      const response = await supertest(app.getHttpServer())
        .post('/weather')
        .send(body)
        .expect(201);

      expect(response.body).toMatchObject({
        climate: ClimateType.POLAR,
      });
    });
  });
});
