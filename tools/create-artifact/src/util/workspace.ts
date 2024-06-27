import fs from 'fs';
import path from 'path';
import process from 'process';
import { findWorkspacePackagesNoCheck } from '@pnpm/find-workspace-packages';
import { Project } from '@pnpm/types';

export class Workspace {
  public rootDir: string;

  public packages: Project[];

  constructor(rootDir: string, packages: Project[]) {
    this.rootDir = rootDir;
    this.packages = packages;
  }

  static getRootDir(directory: string, maxIteration: number = 10): string {
    const possibleWorkspaceRoot = path.join(directory, 'pnpm-workspace.yaml');

    if (fs.existsSync(possibleWorkspaceRoot)) {
      return directory;
    }

    if (maxIteration === 0) {
      throw Error('No workspace project was found');
    }

    return Workspace.getRootDir(path.join(directory, '../'), maxIteration - 1);
  }

  static async getPackages(rootDir: string): Promise<Project[]> {
    return findWorkspacePackagesNoCheck(rootDir);
  }

  getPackageByName(packageName: string): Project | null {
    return this.packages.find(pkg => pkg.manifest.name === packageName) ?? null;
  }

  getPackageByPath(packagePath: string): Project | null {
    return this.packages.find(pkg => pkg.dir === packagePath) ?? null;
  }

  tryToResolvePackage(packageNameOrPath: string): Project | null {
    const packageByName = this.getPackageByName(packageNameOrPath);
    if (packageByName) {
      return packageByName;
    }

    let packagePath: string = packageNameOrPath;
    if (packageNameOrPath.startsWith('.')) {
      packagePath = path.resolve(process.cwd(), packageNameOrPath);
    }

    const packageByPath = this.getPackageByPath(packagePath);
    return packageByPath || null;
  }
}
