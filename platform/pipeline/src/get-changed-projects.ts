import {
  ProjectChangeAnalyzer,
  RushConfiguration,
  IGetChangedProjectsOptions,
  RushConfigurationProject,
} from '@microsoft/rush-lib';
import {
  Terminal,
  ConsoleTerminalProvider,
} from '@rushstack/node-core-library';

export type ProjectType = {
  packageName: string;
  relativeFolder: string;
  absoluteFolder: string;
};

export async function getChangedProjects(
  branch: string,
  tag?: string,
  configFile?: string,
): Promise<any> {
  const rushConfiguration = configFile
    ? RushConfiguration.loadFromConfigurationFile(configFile)
    : RushConfiguration.loadFromDefaultLocation();

  const projectChangeAnalyzer: ProjectChangeAnalyzer =
    new ProjectChangeAnalyzer(rushConfiguration);

  const terminalProvider = new ConsoleTerminalProvider();
  const terminal = new Terminal(terminalProvider);

  const getChangedProjectOptions: IGetChangedProjectsOptions = {
    targetBranchName: branch,
    includeExternalDependencies: true,
    terminal: terminal,
    enableFiltering: false,
  };

  const changedProjects = await projectChangeAnalyzer.getChangedProjectsAsync(
    getChangedProjectOptions,
  );

  let projects: ProjectType[] = [];

  changedProjects.forEach((project: RushConfigurationProject) => {
    if (tag === undefined || project.tags.has(tag)) {
      projects.push({
        packageName: project.packageName,
        relativeFolder: project.projectRelativeFolder,
        absoluteFolder: project.projectFolder,
      });
    }
  });

  return Promise.resolve(projects);
}
