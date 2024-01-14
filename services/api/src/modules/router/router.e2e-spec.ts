// import supertest from 'supertest';
// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import { RouterModule } from './router.module';
// import { RouterService } from './router.service';

// describe('/router', () => {
//   let app: INestApplication;
//   let routerService: RouterService;

//   beforeEach(async () => {
//     const moduleRef: TestingModule = await Test.createTestingModule({
//       imports: [RouterModule],
//     }).compile();

//     app = moduleRef.createNestApplication();
//     routerService = moduleRef.get<RouterService>(RouterService);
//     await app.init();
//   });

//   afterEach(async () => {
//     app.close();
//   });

//   it('POST /router', async () => {
//     const response = await supertest(app.getHttpServer())
//       .post('/router')
//       .send({
//         notation: '1d6',
//         luck: 1,
//         iterations: 1,
//       })
//       .expect(201);
//     const { body } = response;

//     expect(body.message).toBe('Success');
//     expect(body.data[0].total).toBeGreaterThanOrEqual(1);
//     expect(body.data[0].total).toBeLessThanOrEqual(6);
//     expect(body.data[0].min).toBe(1);
//     expect(body.data[0].max).toBe(6);
//     expect(body.data[0].luck).toBeDefined();
//     expect(body.data[0].bonus).toBeDefined();
//   });
// });
