import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { copyRecursiveSync } from './copy-recursive-sync';

describe('copyRecursiveSync', () => {
  let sourceDir: string;
  let targetDir: string;

  beforeEach(() => {
    // Create temporary directories
    sourceDir = fs.mkdtempSync(path.join(os.tmpdir(), 'source'));
    targetDir = fs.mkdtempSync(path.join(os.tmpdir(), 'target'));

    // Create a sample directory structure in the source directory
    fs.mkdirSync(path.join(sourceDir, 'subdir'));
    fs.writeFileSync(
      path.join(sourceDir, 'file1.txt'),
      'Hello, World!',
      'utf8',
    );
    fs.writeFileSync(
      path.join(sourceDir, 'subdir', 'file2.txt'),
      'Goodbye, World!',
      'utf8',
    );
  });

  afterEach(() => {
    // Cleanup: Remove temporary directories recursively
    deleteFolderRecursive(sourceDir);
    deleteFolderRecursive(targetDir);
  });

  it('copies files and directories recursively', () => {
    // Call the function under test
    copyRecursiveSync(sourceDir, targetDir);

    // Assert that files and directories are copied correctly
    expect(fs.existsSync(path.join(targetDir, 'file1.txt'))).toBe(true);
    expect(fs.existsSync(path.join(targetDir, 'subdir', 'file2.txt'))).toBe(
      true,
    );

    const file1Content = fs.readFileSync(
      path.join(targetDir, 'file1.txt'),
      'utf8',
    );
    expect(file1Content).toEqual('Hello, World!');

    const file2Content = fs.readFileSync(
      path.join(targetDir, 'subdir', 'file2.txt'),
      'utf8',
    );
    expect(file2Content).toEqual('Goodbye, World!');
  });
});

// Helper function to delete folders recursively
function deleteFolderRecursive(folderPath: string) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(file => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}
