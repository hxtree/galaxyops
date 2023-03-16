import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService, ConfigModule } from '@nestjs/config';

describe('ConfigService', () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [ConfigService],
    }).compile();

    process.env.DOTENV_CONFIG_ENABLED_CHECK = 'true';

    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(configService).toBeDefined();
  });

  it('should dotenv get env', () => {
    expect(configService.get('DOTENV_CONFIG_ENABLED_CHECK')).toEqual('true');
  });
});
