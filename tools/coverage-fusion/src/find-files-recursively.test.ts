import fs from 'fs';
import path from 'path';
import os from 'os';
import { findFilesRecursively } from './find-files-recursively';

describe('findFilesRecursively', () => {
  let testDir: string;

  beforeEach(() => {
    // Create a temporary directory structure
    testDir = fs.mkdtempSync(
      path.join(fs.realpathSync(os.tmpdir()), 'testDir'),
    );

    // Create nested directories and files
    fs.mkdirSync(path.join(testDir, 'subdir1'));
    fs.mkdirSync(path.join(testDir, 'subdir2'));
    fs.writeFileSync(path.join(testDir, 'file1.txt'), 'File 1 content', 'utf8');
    fs.writeFileSync(
      path.join(testDir, 'subdir1', 'file2.txt'),
      'File 2 content',
      'utf8',
    );
    fs.writeFileSync(
      path.join(testDir, 'subdir2', 'file1.txt'),
      'File 3 content',
      'utf8',
    );
  });

  afterEach(() => {
    // Cleanup: Remove temporary directory recursively
    deleteFolderRecursive(testDir);
  });

  it('finds files recursively in a directory', () => {
    // Call the function under test
    const results = findFilesRecursively(testDir, 'file1.txt');

    // Assert the results
    expect(results).toHaveLength(2);
    expect(results).toContain(path.join(testDir, 'file1.txt'));
    expect(results).toContain(path.join(testDir, 'subdir2', 'file1.txt'));
  });

  it('returns an empty array if no matching files are found', () => {
    // Call the function under test with a non-existing file name
    const results = findFilesRecursively(testDir, 'nonexistent.txt');

    // Assert the results
    expect(results).toHaveLength(0);
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
