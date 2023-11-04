import fs from 'fs';
import archiver from 'archiver';

export function archive(sourceDir: string, filename: string) {
  const output = fs.createWriteStream(filename);
  const archive = archiver('zip');

  output.on('close', () => {
    console.log(`rm ${sourceDir}`);
    fs.rmSync(sourceDir, { recursive: true, force: true });

    console.log(`archived ${archive.pointer()} total bytes`);
  });

  archive.on('error', (err: any) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(sourceDir, false);
  archive.finalize();
}
