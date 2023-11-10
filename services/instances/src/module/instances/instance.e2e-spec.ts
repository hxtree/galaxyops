import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  rootMongooseTestModule,
  MongooseModule,
  closeInMongodConnection,
} from '@cats-cradle/nestjs-modules';
import { FakerFactory } from '@cats-cradle/faker-factory';
import { InstanceSchema, Instance } from '../../models/instance.schema';
import { InstanceRepository } from '../../models/instance.repository';
import { InstanceController } from './instance.controller';
import { CreateDto } from './create.dto';

describe('/instances', () => {
  let app: INestApplication;
  let instanceRepository: InstanceRepository;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: 'Instance', schema: InstanceSchema },
        ]),
      ],
      providers: [InstanceRepository],
      controllers: [InstanceController],
    }).compile();

    app = moduleRef.createNestApplication();
    instanceRepository = moduleRef.get<InstanceRepository>(InstanceRepository);

    await app.init();
  });

  afterEach(async () => {
    await instanceRepository.deleteAll();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('POST /instances', () => {
    it('should create an instance', async () => {
      const body = await FakerFactory.create<CreateDto>(
        CreateDto,
        {},
        { optionals: false, pojo: true },
      );

      const response = await supertest(app.getHttpServer())
        .post('/instances')
        .send(body)
        .expect(201);

      const instance = await instanceRepository.findOneOrFail({
        id: body.id,
      });

      expect(instance?.id).toEqual(body.id);
      expect(instance?.createdAt).toBeDefined();
    });
  });

  describe('DELETE /instances', () => {
    it('should remove the specified instance only', async () => {
      const instance = await FakerFactory.create<Instance>(
        Instance,
        {},
        { optionals: false },
      );
      await instanceRepository.create(instance);
      const instance2 = await FakerFactory.create<Instance>(
        Instance,
        {},
        { optionals: false },
      );
      await instanceRepository.create(instance2);

      const response = await supertest(app.getHttpServer())
        .delete('/instances')
        .send({ id: instance._id })
        .expect(200);

      const results = await instanceRepository.findAll();

      expect(results).toHaveLength(1);

      expect(response.body).toMatchObject({
        deletedCount: 1,
        deleted: true,
      });
    });
  });
});
