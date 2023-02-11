import {
  ProjectChangeAnalyzer,
  RushConfiguration,
  IGetChangedProjectsOptions,
} from '@microsoft/rush-lib';
import {
  Terminal,
  ConsoleTerminalProvider,
} from '@rushstack/node-core-library';

export async function getChangedProjects(configFile?: string): Promise<any> {
  const rushConfiguration = configFile
    ? RushConfiguration.loadFromConfigurationFile(configFile)
    : RushConfiguration.loadFromDefaultLocation();

  const projectChangeAnalyzer: ProjectChangeAnalyzer =
    new ProjectChangeAnalyzer(rushConfiguration);

  const terminalProvider = new ConsoleTerminalProvider();
  const terminal = new Terminal(terminalProvider);

  const getChangedProjectOptions: IGetChangedProjectsOptions = {
    targetBranchName: 'main',
    includeExternalDependencies: true,
    terminal: terminal,
    enableFiltering: false,
  };

  const changedProjects = await projectChangeAnalyzer.getChangedProjectsAsync(
    getChangedProjectOptions,
  );

  console.log(changedProjects);

  return changedProjects;
}
