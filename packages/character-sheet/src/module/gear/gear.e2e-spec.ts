import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { GearModule } from './gear.module';
import { GearService } from './gear.service';

describe('/gears', () => {
  let app: INestApplication;
  let gearService: GearService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [GearModule],
    }).compile();

    app = moduleRef.createNestApplication();
    gearService = moduleRef.get<GearService>(GearService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('GET /gears', async () => {
    await supertest(app.getHttpServer())
      .get('/gears')
      .expect(200)
      .expect(await gearService.list());
  });

  it('GET /gears/:id', async () => {
    await supertest(app.getHttpServer())
      .get('/gears/COWHIDE_VEST')
      .expect(200)
      .expect(await gearService.find('COWHIDE_VEST'));
  });
});
