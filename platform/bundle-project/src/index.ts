import { Project } from '@pnpm/types';
import path from 'path';

import { argsParserPromise } from '@/util/args-parser.js';
import { Workspace } from '@/util/Workspace.js';
import { PackageBundler } from '@/util/PackageBundler.js';

import { Config } from '@/types/cli.js';

// https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
import { fileURLToPath } from 'url';

const main = async () => {
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

  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

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
};

main().then(() => {});

export { PackageBundler, Project, Workspace };
