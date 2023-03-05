import { MongoMemoryServer } from 'mongodb-memory-server';

describe('MongoMemoryServer', () => {
  let mongod: MongoMemoryServer;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create({
      binary: {
        version: '4.2.8',
      },
    });
  });

  afterEach(async () => {
    await mongod.stop();
  });

  it('should get uri', async () => {
    expect(mongod).toBeDefined();
    const mongoUri = await mongod.getUri();
    expect(mongoUri).toMatch(/^mongodb/);
  });
});
