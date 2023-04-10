import { rmSync, readFileSync } from 'fs';
import { join } from 'path';
import { nestJsBundler } from '../profiles/nestjs-bundler';

describe('nestJsBundler', () => {
  it('should build src to dist', async () => {
    rmSync('./dist', { recursive: true, force: true });
    const result = nestJsBundler({
      projectRoot: join(__dirname, 'test-data/nestjs'),
    });
    const file = readFileSync(
      join(__dirname, 'test-data/nestjs/dist/index.js'),
      'utf-8',
    );
    expect(result).toEqual(undefined);
    expect(file).toContain('console.log("test");');
  });
});
