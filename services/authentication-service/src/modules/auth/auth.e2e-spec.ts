import { FakerFactory } from '@cats-cradle/faker-factory';
import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { LoginDto } from './login-dto';
import { SignUpDto } from './sign-up-dto';
import { CognitoService } from './cognito.service';

describe('/auth', () => {
  let app: INestApplication;
  let cognitoService: CognitoService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
      providers: [],
      controllers: [],
    }).compile();

    app = moduleRef.createNestApplication();
    cognitoService = moduleRef.get<CognitoService>(CognitoService);

    await app.init();
  });

  afterEach(async () => {
    app.close();
  });

  describe('GET /auth/sign-up', () => {
    it('should 200 with status ok', async () => {
      jest
        .spyOn(cognitoService, 'signUp')
        .mockImplementation((username: string, password: string) => Promise.resolve());

      const body = await FakerFactory.create<SignUpDto>(
        SignUpDto,
        { username: 'jdoe' },
        { optionals: false },
      );

      const response = await supertest(app.getHttpServer())
        .post('/auth/sign-up')
        .send(body)
        .expect(201);
      expect(response.text).toBe(
        '{"message":"Sign-up successful. Please check your email for verification instructions."}',
      );
    });
  });
});
