import fs, { existsSync, mkdirSync, rmSync } from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { Project } from '@pnpm/types';
import { TargetPackage } from '../util/target-package.js';
import { Workspace } from '../util/workspace.js';
import { writeJsonFile } from '../util/json.js';
import { Config } from '../types/cli.js';
import { WorkspaceDecouple } from './workspace-decouple.js';

export class PackageBundler {
  workspace: Workspace;
  targetPackage: TargetPackage;
  workspaceDecouple: WorkspaceDecouple;

  config: Config;

  constructor(workspace: Workspace, targetPackage: Project, config: Config) {
    this.workspace = workspace;
    this.targetPackage = new TargetPackage(targetPackage, workspace);
    this.config = config;
    this.workspaceDecouple = new WorkspaceDecouple();
  }

  createDistFolder() {
    if (existsSync(this.config.outDir)) {
      if (!this.config.overwrite) {
        throw Error(`Output directory (${this.config.outDir}) already exists`);
      }
      rmSync(this.config.outDir, { recursive: true });
    }

    mkdirSync(this.config.outDir, { recursive: true });
  }

  replaceWorkspaceDependenciesVersions(
    pkg: Project,
    relativePath: string,
  ): Project {
    if (pkg.manifest.dependencies) {
      Object.keys(pkg.manifest.dependencies).forEach(dependencyName => {
        const workspacePackage =
          this.workspace.getPackageByName(dependencyName);
        if (workspacePackage && pkg.manifest.dependencies) {
          const directoryName = path.basename(workspacePackage.dir);
          pkg.manifest.dependencies[
            dependencyName
          ] = `file:${relativePath}/${directoryName}`;
        }
      });
    }

    return pkg;
  }

  private filterFiles(src: string, _: string) {
    // In the last iteration 'this.config' is undefined for some weird reason
    const ignorePatterns = [
      'node_modules',
      'package.json',
      this.config?.outDir,
    ];
    return !ignorePatterns.some(pattern => src.includes(pattern));
  }

  copyTargetPackageWorkspaceDependencies() {
    this.targetPackage.workspaceDependencies.forEach(dependency => {
      const directoryName = path.basename(dependency.dir);
      const distPath = path.join(
        this.config.outDir,
        this.config.workspaceDependenciesFolder,
        directoryName,
      );
      fse.copySync(dependency.dir, distPath, {
        filter: this.filterFiles,
      });

      dependency = this.replaceWorkspaceDependenciesVersions(dependency, '..');

      writeJsonFile(path.join(distPath, 'package.json'), dependency.manifest);
    });
  }

  copyPackageFiles() {
    let targetPackage = this.targetPackage.pkg;

    const filesToCopy = fs.readdirSync(targetPackage.dir);

    filesToCopy.forEach(file => {
      if (file !== this.config.outDir) {
        fse.copySync(
          path.join(targetPackage.dir, file),
          path.join(this.config.outDir, file),
          {
            filter: this.filterFiles,
          },
        );
      }
    });
  }

  copyTargetPackageFiles() {
    let targetPackage = this.targetPackage.pkg;

    const filesToCopy = fs.readdirSync(targetPackage.dir);

    filesToCopy.forEach(file => {
      if (file !== this.config.outDir) {
        fse.copySync(
          path.join(targetPackage.dir, file),
          path.join(this.config.outDir, file),
          {
            filter: this.filterFiles,
          },
        );
      }
    });

    targetPackage = this.replaceWorkspaceDependenciesVersions(
      targetPackage,
      `./${this.config.workspaceDependenciesFolder}`,
    );

    writeJsonFile(
      path.join(this.config.outDir, 'package.json'),
      targetPackage.manifest,
    );
  }
}
