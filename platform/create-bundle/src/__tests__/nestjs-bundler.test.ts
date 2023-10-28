import {
  existsSync, rmSync, readFileSync, writeFileSync,
} from 'fs';
import { join } from 'path';
import { NestJsBundler } from '../profiles/nestjs-bundler';

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

describe('NestJsBundler', () => {
  const distFolder = join(__dirname, 'test-data/nestjs/dist');
  const inputFilename = join(__dirname, 'test-data/nestjs/src/index.ts');
  const outputFilename = join(__dirname, 'test-data/nestjs/dist/index.js');

  afterEach(async () => {
    if (existsSync(outputFilename)) {
      rmSync(distFolder, {
        recursive: true,
        force: true,
      });
    }
    writeFileSync(inputFilename, "console.log('tear down')");
  });

  it('should build src to dist', async () => {
    const date = Date.now().toString();
    const contents = `console.log("modified ${date}");`;
    writeFileSync(inputFilename, contents);

    const bundler = new NestJsBundler({
      projectRoot: join(__dirname, 'test-data/nestjs'),
      watch: false,
    });
    await bundler.build();

    const file = readFileSync(outputFilename, 'utf-8');
    expect(file).toContain(contents);
  });

  it('should watch for file changes and rebuild', async () => {
    const date = Date.now().toString();
    const contents = `console.log("modified ${date}");`;

    const bundler = new NestJsBundler({
      projectRoot: join(__dirname, 'test-data/nestjs'),
      watch: true,
    });

    // wait for watch to init
    await sleep(1000);

    writeFileSync(inputFilename, contents);

    // wait for watch to run
    await sleep(1000);

    await bundler.close();

    const file = readFileSync(outputFilename, 'utf-8');
    expect(file).toContain(contents);
  }, 3000);
});
