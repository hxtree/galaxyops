import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DiceRollModule } from './dice-roll.module';
import { DiceRollService } from './dice-roll.service';

describe('/dice-roll', () => {
  let app: INestApplication;
  let dicerollService: DiceRollService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [DiceRollModule],
    }).compile();

    app = moduleRef.createNestApplication();
    dicerollService = moduleRef.get<DiceRollService>(DiceRollService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('POST /dice-roll', async () => {
    const response = await supertest(app.getHttpServer())
      .post('/dice-roll')
      .send({
        notation: '1d6',
        luck: 1,
        iterations: 1,
      })
      .expect(201);
    const { body } = response;

    expect(body.message).toBe('Success');
    expect(body.data[0].total).toBeGreaterThanOrEqual(1);
    expect(body.data[0].total).toBeLessThanOrEqual(6);
    expect(body.data[0].min).toBe(1);
    expect(body.data[0].max).toBe(6);
    expect(body.data[0].luck).toBeDefined();
    expect(body.data[0].bonus).toBeDefined();
  });
});
