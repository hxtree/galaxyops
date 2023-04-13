import fs, { rmSync } from 'fs';
import archiver from 'archiver';

export function archive(sourceDir: string, filename: string) {
  var output = fs.createWriteStream(filename);
  var archive = archiver('zip');

  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log(
      'archiver has been finalized and the output file descriptor has closed.',
    );
  });

  archive.on('error', function (err: any) {
    throw err;
  });

  archive.pipe(output);
  archive.directory(sourceDir, false);
  archive.finalize();

  console.log(`rm ${sourceDir}`);

  fs.rmSync(sourceDir, { recursive: true, force: true });
}
