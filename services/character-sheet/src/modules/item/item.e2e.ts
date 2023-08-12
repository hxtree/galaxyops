import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ItemModule } from './item.module';
import { ItemService } from './item.service';

describe('/items', () => {
  let app: INestApplication;
  let itemService: ItemService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [ItemModule],
    }).compile();

    app = moduleRef.createNestApplication();
    itemService = moduleRef.get<ItemService>(ItemService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('GET /items', async () => {
    await supertest(app.getHttpServer())
      .get('/items')
      .expect(200)
      .expect(await itemService.list());
  });

  it('GET /items/:id', async () => {
    await supertest(app.getHttpServer())
      .get('/items/RICE_BALL')
      .expect(200)
      .expect(await itemService.find('RICE_BALL'));
  });
});
