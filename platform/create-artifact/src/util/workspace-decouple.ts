import fs from 'fs';
import path from 'path';
import { findWorkspacePackagesNoCheck } from '@pnpm/find-workspace-packages';
import { findWorkspaceDir } from '@pnpm/find-workspace-dir';

export class WorkspaceDecouple {
  async changeDependency(dependencies: any) {
    const workspaceDir: string = (await findWorkspaceDir(process.cwd())) ?? '';

    const projects = await findWorkspacePackagesNoCheck(workspaceDir);

    if (typeof dependencies !== 'object' || dependencies === null) {
      return;
    }

    const [_rootProject, ...workspaceProjects] = projects;

    for (const dependency of Object.entries(dependencies)) {
      const pkgName: string = dependency[0] as string;
      const pkgVersion: string = dependency[1] as string;

      if (!pkgVersion.startsWith('workspace:')) {
        continue;
      }

      const matchingWorkspaceProject = workspaceProjects.find(
        (project) => project.manifest.name === pkgName,
      );
      if (
        !matchingWorkspaceProject
        || !matchingWorkspaceProject.manifest.version
      ) {
        throw new Error(
          `Fail to replace workspace with package ${pkgName} make sure it's published`,
        );
      }
      dependencies[pkgName] = `${matchingWorkspaceProject.manifest.version}`;
    }

    return dependencies;
  }

  async convertJson(packageJson: any): Promise<any> {
    if (packageJson.dependencies !== undefined) {
      packageJson.dependencies = await this.changeDependency(
        packageJson.dependencies,
      );
    }
    if (packageJson.devDependencies !== undefined) {
      packageJson.devDependencies = await this.changeDependency(
        packageJson.devDependencies,
      );
    }
    if (packageJson.peerDependencies !== undefined) {
      packageJson.peerDependencies = await this.changeDependency(
        packageJson.peerDependencies,
      );
    }
    if (packageJson.optionalDependencies !== undefined) {
      packageJson.optionalDependencies = await this.changeDependency(
        packageJson.optionalDependencies,
      );
    }

    return packageJson;
  }

  async convertFilename(source: string, destination: string) {
    let packageJson = JSON.parse(await fs.promises.readFile(source, 'utf-8'));

    packageJson = await this.convertJson(packageJson);

    await fs.promises.writeFile(
      destination,
      JSON.stringify(packageJson, undefined, 2),
      'utf-8',
    );
  }
}
