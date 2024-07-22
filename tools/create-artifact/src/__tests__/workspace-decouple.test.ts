import fs from 'fs';
import path from 'path';
import { WorkspaceDecouple } from '../util/workspace-decouple';

describe('WorkspaceDecouple', () => {
  describe('convertFilename', () => {
    it('should replace workspace with version', async () => {
      const sourceFilepath = path.join(__dirname, '../../package.json');
      const outputFilepath = path.join(
        __dirname,
        './test-data/package-output.json',
      );

      const workspaceDecouple = new WorkspaceDecouple();
      await workspaceDecouple.convertFilename(sourceFilepath, outputFilepath);
      const result = await fs.promises.readFile(outputFilepath, 'utf-8');
      const resultJson = JSON.parse(result);

      expect(resultJson).toEqual(
        expect.objectContaining({
          name: '@galaxyops/create-artifact',
          devDependencies: expect.objectContaining({
            '@galaxyops/eslint-config':
              expect.not.stringContaining('workspace:*'),
          }),
        }),
      );
    });
  });

  describe('convertJson', () => {
    it('should replace workspace with version', async () => {
      const packageJson = {
        name: 'test-package',
        version: '1.0.2',
        devDependencies: {
          '@galaxyops/eslint-config': 'workspace:*',
        },
      };
      const workspaceDecouple = new WorkspaceDecouple();
      const result = await workspaceDecouple.convertJson(packageJson);
      expect(result).toEqual(
        expect.objectContaining({
          devDependencies: {
            '@galaxyops/eslint-config':
              expect.not.stringContaining('workspace:*'),
          },
          name: 'test-package',
          version: '1.0.2',
        }),
      );
    });
  });
});
