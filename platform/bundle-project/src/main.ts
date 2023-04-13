import { Project } from '@pnpm/types';
import path from 'path';
import { argsParserPromise } from './util/args-parser.js';
import { Workspace } from './util/workspace.js';
import { PackageBundler } from './util/package-bundler.js';
import { Config } from './types/cli.js';
import { archive } from './util/archive';

export const main = async () => {
  const argsParser = await argsParserPromise;

  const targetPackageNameOrPath = argsParser._[0];
  if (!targetPackageNameOrPath || typeof targetPackageNameOrPath !== 'string') {
    throw Error('Target package name or path is required');
  }

  const config: Config = {
    outDir: argsParser.outDir,
    overwrite: argsParser.overwrite,
    workspaceDependenciesFolder: 'workspace-dependencies',
  };

  const dirname = path.dirname(__dirname);
  const workspaceRootDir = Workspace.getRootDir(dirname);
  const workspacePackages = await Workspace.getPackages(workspaceRootDir);
  const workspace = new Workspace(workspaceRootDir, workspacePackages);

  let targetPackage: Project | null = workspace.tryToResolvePackage(
    targetPackageNameOrPath,
  );
  if (!targetPackage) {
    throw Error("Couldn't find target package inside workspace");
  }

  const packageBundler = new PackageBundler(workspace, targetPackage, config);

  packageBundler.createDistFolder();
  packageBundler.copyTargetPackageFiles();
  packageBundler.copyTargetPackageWorkspaceDependencies();

  archive(config.outDir, `${config.outDir}.zip`);
};
