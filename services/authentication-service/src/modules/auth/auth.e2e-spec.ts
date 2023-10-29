import { FakerFactory } from '@cats-cradle/faker-factory';
import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { LoginDto } from './login-dto';
import { SignUpDto } from './sign-up-dto';
import { CognitoService } from './cognito.service';
import { ResetPasswordDto } from './reset-password-dto';
import { ForgotPasswordDto } from './forgot-password-dto';

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

  describe('POST /auth/sign-up', () => {
    it('should 201 with status ok', async () => {
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

  describe('POST /auth/reset-password', () => {
    it('should 201 with status ok', async () => {
      jest
        .spyOn(cognitoService, 'resetPassword')
        .mockImplementation((username: string, password: string) => Promise.resolve());

      const body = await FakerFactory.create<ResetPasswordDto>(ResetPasswordDto);

      const response = await supertest(app.getHttpServer())
        .post('/auth/reset-password')
        .send(body)
        .expect(201);
      expect(response.text).toBe('{"message":"Password reset successful."}');
    });
  });

  describe('POST /auth/forgot-password', () => {
    it('should 201 with status ok', async () => {
      jest
        .spyOn(cognitoService, 'forgotPassword')
        .mockImplementation((username: string) => Promise.resolve());

      const body = await FakerFactory.create<ForgotPasswordDto>(ForgotPasswordDto);

      const response = await supertest(app.getHttpServer())
        .post('/auth/forgot-password')
        .send(body)
        .expect(201);
      expect(response.text).toBe(
        '{"message":"Password reset instructions sent to your email."}',
      );
    });
  });

  describe('POST /auth/login', () => {
    it('should 201 with status ok', async () => {
      jest
        .spyOn(cognitoService, 'authenticate')
        .mockImplementation((username: string, password: string) => Promise.resolve({
          AuthenticationResult: {
            IdToken: '',
            RefreshToken: '',
            ExpiresIn: '',
            AccessToken: '',
            TokenType: '',
          },
        }));

      const body = await FakerFactory.create<LoginDto>(LoginDto);

      const response = await supertest(app.getHttpServer())
        .post('/auth/login')
        .send(body)
        .expect(201);

      expect(response.body).toMatchObject(
        expect.objectContaining({
          token: expect.any(String),
        }),
      );
    });
  });
});
