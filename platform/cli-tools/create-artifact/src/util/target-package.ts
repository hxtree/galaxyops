import { Project } from '@pnpm/types';
import { Workspace } from './workspace';

export class TargetPackage {
  pkg: Project;

  workspace: Workspace;

  workspaceDependencies: Project[];

  constructor(pkg: Project, workspace: Workspace) {
    this.pkg = pkg;
    this.workspace = workspace;
    this.workspaceDependencies = TargetPackage.getWorkspaceDependencies(
      workspace,
      pkg,
    );
  }

  private static getPackageDependenciesList(pkg: Project): string[] {
    const dependenciesList: string[] = [];
    if (pkg.manifest.dependencies) {
      dependenciesList.push(...Object.keys(pkg.manifest.dependencies));
    }
    if (pkg.manifest.devDependencies) {
      dependenciesList.push(...Object.keys(pkg.manifest.devDependencies));
    }

    return dependenciesList;
  }

  private static getWorkspaceDependencies(
    workspace: Workspace,
    pkg: Project,
  ): Project[] {
    const targetPackageDependencies: Project[] = [];
    const recursive = (rpkg: Project) => {
      const packageDependenciesList =
        TargetPackage.getPackageDependenciesList(rpkg);
      if (!packageDependenciesList.length) {
        return;
      }

      packageDependenciesList.forEach(dependencyName => {
        const workspacePackage = workspace.getPackageByName(dependencyName);

        if (
          workspacePackage &&
          !targetPackageDependencies.includes(workspacePackage)
        ) {
          targetPackageDependencies.push(workspacePackage);
          recursive(workspacePackage);
        }
      });
    };
    recursive(pkg);
    return targetPackageDependencies;
  }
}
