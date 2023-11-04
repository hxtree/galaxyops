import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { ClimateType } from './climates.type';
import { QueryDto } from './query.dto';
import { TimeOfDayType } from './time-of-day.type';
import { CreateDto } from './create.dto';

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

  describe('POST /weather/influence', () => {
    it.skip('should throw 500 until finished', async () => {
      const body = await FakerFactory.create<CreateDto>(CreateDto);

      const response = await supertest(app.getHttpServer())
        .post('/weather/influence')
        .send(body)
        .expect(500);

      expect(response.body).toMatchObject({});

      // TODO add logic to cause influencing to work
    });
  });

  describe('POST /weather', () => {
    it.each([
      [0, TimeOfDayType.MIDNIGHT],
      [2, TimeOfDayType.MIDNIGHT],
      [5, TimeOfDayType.DAWN],
      [8, TimeOfDayType.MORNING],
      [12, TimeOfDayType.NOON],
      [17, TimeOfDayType.EVENING],
      [20, TimeOfDayType.DUSK],
      [23, TimeOfDayType.MIDNIGHT],
    ])(
      'should determine hour %i as %s',
      async (hour: number, timeOfDay: TimeOfDayType) => {
        const now = new Date();
        now.setHours(hour);

        const body = await FakerFactory.create<QueryDto>(QueryDto, {
          date: now.toISOString(),
        });

        const response = await supertest(app.getHttpServer())
          .post('/weather')
          .send(body)
          .expect(201);

        expect(response.body).toMatchObject({
          timeOfDay,
        });
      },
    );

    it.each([
      [60, ClimateType.POLAR],
      [40, ClimateType.CONTINENTAL],
      [25, ClimateType.TEMPERATE],
      [20, ClimateType.DRY],
      [-15, ClimateType.TROPICAL],
      [-20, ClimateType.DRY],
      [-25, ClimateType.TEMPERATE],
      [-40, ClimateType.CONTINENTAL],
      [-60, ClimateType.POLAR],
      [-90, ClimateType.POLAR],
    ])(
      'should determine climate %i as %s',
      async (latitude: number, climate: ClimateType) => {
        const body = await FakerFactory.create<QueryDto>(QueryDto, {
          latitude: latitude.toString(),
        });

        const response = await supertest(app.getHttpServer())
          .post('/weather')
          .send(body)
          .expect(201);

        expect(response.body).toMatchObject({
          climate,
        });
      },
    );
  });
});
