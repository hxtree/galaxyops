import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { mockClient } from 'aws-sdk-client-mock';
import { Test, TestingModule } from '@nestjs/testing';
import { S3Service } from './s3.service';
import { S3ClientService } from './s3-client.service';

describe('S3Service', () => {
  let s3Service: S3Service;
  const s3Mock = mockClient(S3Client);

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [S3Service, { provide: S3ClientService, useValue: s3Mock }],
    }).compile();

    s3Service = moduleRef.get<S3Service>(S3Service);
  });

  beforeEach(async () => {
    s3Mock.reset();
  });

  describe('putObject', () => {
    it('should return true on success', async () => {
      s3Mock.on(PutObjectCommand).resolves({
        $metadata: { httpStatusCode: 200 },
      });
      const result = await s3Service.putObject('myBucket', 'myKey', 'a,b,c');

      expect(result).toEqual(true);
    });
  });
});
