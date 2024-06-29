import fs from 'fs';
import path from 'path';
import os from 'os';
import { getCoverageReports } from './get-coverage-reports';

describe('getCoverageReports', () => {
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

  it('returns paths to matching files', () => {
    // Mock findFilesRecursively to return specific paths
    jest.spyOn(global.console, 'info').mockImplementation(() => {}); // Mock console.info

    const expectedFiles = [
      path.join(testDir, 'file1.txt'),
      path.join(testDir, 'subdir2', 'file1.txt'),
    ];

    // Call the function under test
    const result = getCoverageReports(testDir, 'file1.txt');

    // Assert the result
    expect(result).toEqual(expectedFiles);

    // Verify console.info was called with the coverage files
    expect(console.info).toHaveBeenCalledWith(expectedFiles);
  });

  it('returns an empty array if no matching files are found', () => {
    // Call the function under test with a non-existing filename
    const result = getCoverageReports(testDir, 'nonexistent.txt');

    // Assert the result
    expect(result).toEqual([]);
  });
});

// Helper function to delete folders recursively
function deleteFolderRecursive(folderPath: string) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
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
