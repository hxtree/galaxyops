import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';
import * as os from 'os';

export const CHROMIUM_ZIP_URL = 'https://github.com/Sparticuz/chromium/releases/download/v112.0.0/chromium-v112.0.0-layer.zip';

export const CHROMIUM_ZIP_FILEPATH = path.resolve(
  os.tmpdir(),
  './chromium-lambda-layer.zip',
);

export async function downloadChromiumZip(): Promise<any> {
  if (fs.existsSync(CHROMIUM_ZIP_FILEPATH)) {
    console.log(`Cached ${CHROMIUM_ZIP_URL}`);
    return;
  }

  console.log(`Downloading ${CHROMIUM_ZIP_URL}`);

  await axios({
    method: 'get',
    url: CHROMIUM_ZIP_URL,
    responseType: 'stream',
  })
    .then((response: any) => {
      const writer = fs.createWriteStream(CHROMIUM_ZIP_FILEPATH);

      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    })
    .then(() => {
      console.log('File downloaded successfully.');
    })
    .catch((error: any) => {
      console.error('An error occurred:', error);
    });
}
