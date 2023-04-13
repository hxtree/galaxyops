import fs from 'fs';
import archiver from 'archiver';

export function archive(sourceDir: string, filename: string) {
  var output = fs.createWriteStream(filename);
  var archive = archiver('zip');

  output.on('close', function () {
    console.log(`rm ${sourceDir}`);
    fs.rmSync(sourceDir, { recursive: true, force: true });

    console.log(`archived ${archive.pointer()} total bytes`);
  });

  archive.on('error', function (err: any) {
    throw err;
  });

  archive.pipe(output);
  archive.directory(sourceDir, false);
  archive.finalize();
}
