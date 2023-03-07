import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService, ConfigModule } from '@nestjs/config';

describe('ConfigService', () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [ConfigService],
    }).compile();

    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(configService).toBeDefined();
    expect(configService.get('CONFIG_ENABLED')).toEqual('true');
  });
});
