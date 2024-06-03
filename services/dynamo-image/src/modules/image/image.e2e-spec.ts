import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ImageModule } from './image.module';
import { ImageService } from './image.service';

describe('/images', () => {
  let app: INestApplication;
  let imageService: ImageService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [ImageModule],
    }).compile();

    app = moduleRef.createNestApplication();
    imageService = moduleRef.get<ImageService>(ImageService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  it('GET /images', async () => {
    await supertest(app.getHttpServer())
      .get('/images')
      .expect(200)
      .expect(await imageService.list());
  });

  it('GET /images/:id', async () => {
    await supertest(app.getHttpServer())
      .get('/images/RICE_BALL')
      .expect(200)
      .expect(await imageService.find('RICE_BALL'));
  });
});
