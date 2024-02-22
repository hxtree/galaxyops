import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UserModule } from './user.module';
import { UserService } from './user.service';

describe('/users', () => {
  let app: INestApplication;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleRef.createNestApplication();
    userService = moduleRef.get<UserService>(UserService);
    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  describe('GET /users', () => {
    it('should 404 until feature implemented', async () => {
      await supertest(app.getHttpServer()).get('/users').expect(404);
    });
  });
});
