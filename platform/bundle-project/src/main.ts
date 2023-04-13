import fs from 'fs';
import { Project } from '@pnpm/types';
import path from 'path';
import { argsParserPromise } from './util/args-parser.js';
import { Workspace } from './util/workspace.js';
import { PackageBundler } from './util/package-bundler.js';
import { Config } from './types/cli.js';
import { archive } from './util/archive';

export const main = async () => {
  console.log('start bundle project...');

  const dirname = path.dirname(__dirname);
  const workspaceRootDir = Workspace.getRootDir(dirname);

  const argsParser = await argsParserPromise;

  const targetPackageNameOrPath = argsParser._[0];

  console.log(targetPackageNameOrPath);

  if (!targetPackageNameOrPath || typeof targetPackageNameOrPath !== 'string') {
    throw Error('Target package name or path is required');
  }

  const config: Config = {
    outDir: `${workspaceRootDir}dist/${targetPackageNameOrPath.replace(
      '@cats-cradle/',
      '',
    )}`,
    overwrite: true,
    workspaceDependenciesFolder: 'workspace-dependencies',
  };

  console.log(`bundling ${targetPackageNameOrPath} to ${config.outDir}`);

  const workspacePackages = await Workspace.getPackages(workspaceRootDir);
  const workspace = new Workspace(workspaceRootDir, workspacePackages);

  const targetPackage: Project | null = workspace.tryToResolvePackage(
    targetPackageNameOrPath,
  );
  if (!targetPackage) {
    throw Error("Couldn't find target package inside workspace");
  }

  const packageBundler = new PackageBundler(workspace, targetPackage, config);

  packageBundler.createDistFolder();
  packageBundler.copyTargetPackageFiles();
  packageBundler.copyTargetPackageWorkspaceDependencies();

  console.log(`archive ${config.outDir} to ${config.outDir}.zip`);

  archive(config.outDir, `${config.outDir}.zip`);
};
