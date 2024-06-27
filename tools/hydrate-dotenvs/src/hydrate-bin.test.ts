import * as fs from 'fs';
import {
  findFiles,
  createFindReplaceMappings,
  replaceLinesInFile,
  processDotEnvFile,
  FindReplace,
} from './hydrate-bin';

describe('findFiles', () => {
  it('should find files matching extension', () => {
    const files = findFiles('.', '*.ts');

    expect(files).toContain('src/index.ts');
  });
});

describe('createFindReplaceMappings', () => {
  it('should create find and replace array', () => {
    const sut = createFindReplaceMappings({
      STAGE: 'jdoe',
      DB_PASSWORD: 'secret',
    });

    const expected = [
      { find: 'STAGE=', replace: 'STAGE=jdoe' },
      { find: 'DB_PASSWORD=', replace: 'DB_PASSWORD=secret' },
    ];

    expect(sut).toEqual(expected);
  });
});

describe('replaceLinesInFile', () => {
  it('should replace entire lines in a string', () => {
    const content = 'STAGE=prod\nDB_PASSWORD=pass123\n';
    const findAndReplace = [
      { find: 'STAGE=', replace: 'STAGE=dev' },
      { find: 'DB_PASSWORD=', replace: 'DB_PASSWORD=newpass' },
    ];

    const result = replaceLinesInFile(content, findAndReplace);

    const expected = 'STAGE=dev\nDB_PASSWORD=newpass\n';
    expect(result).toEqual(expected);
  });

  it('should handle multiple replacements correctly', () => {
    const content = 'STAGE=prod\nDB_PASSWORD=pass123\n';
    const findAndReplace = [
      { find: 'STAGE=', replace: 'STAGE=dev' },
      { find: 'DB_PASSWORD=', replace: 'DB_PASSWORD=newpass' },
    ];

    const result = replaceLinesInFile(content, findAndReplace);

    const expected = 'STAGE=dev\nDB_PASSWORD=newpass\n';
    expect(result).toEqual(expected);
  });

  it('should handle no replacements gracefully', () => {
    const content = 'STAGE=prod\nDB_PASSWORD=pass123\n';
    const findAndReplace: FindReplace[] = [];

    const result = replaceLinesInFile(content, findAndReplace);

    const expected = 'STAGE=prod\nDB_PASSWORD=pass123\n';
    expect(result).toEqual(expected);
  });
});

describe('processDotEnvFile', () => {
  const testDir = './test-envs';
  const envFileName = 'test.env';
  const envDistFileName = 'test.env.dist';
  const envFilePath = `${testDir}/${envFileName}`;
  const envDistFilePath = `${testDir}/${envDistFileName}`;

  beforeAll(() => {
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir);
    }

    fs.writeFileSync(envDistFilePath, 'STAGE=\nDB_PASSWORD=\n', 'utf8');
  });

  afterAll(() => {
    if (fs.existsSync(envDistFilePath)) {
      fs.unlinkSync(envDistFilePath);
    }
    if (fs.existsSync(envFilePath)) {
      fs.unlinkSync(envFilePath);
    }
    if (fs.existsSync(testDir)) {
      fs.rmdirSync(testDir);
    }
  });

  it('should create and update .env file based on .env.dist', () => {
    processDotEnvFile(envDistFilePath, {
      STAGE: 'dev',
      DB_PASSWORD: 'newpass',
    });

    const updatedContent = fs.readFileSync(envFilePath, 'utf8');
    const expectedContent = 'STAGE=dev\nDB_PASSWORD=newpass\n';

    expect(updatedContent).toEqual(expectedContent);
  });
});
