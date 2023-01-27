import {
  RushConfiguration,
  RushConfigurationProject,
} from '@microsoft/rush-lib';

export type ProjectType = {
  packageName: string;
  relativeFolder: string;
  absoluteFolder: string;
};

export const getProjects = (configFile?: string): ProjectType[] => {
  const rushConfiguration = configFile
    ? RushConfiguration.loadFromConfigurationFile(configFile)
    : RushConfiguration.loadFromDefaultLocation();

  const projects: ProjectType[] = [];

  rushConfiguration.projects.forEach((project: RushConfigurationProject) => {
    projects.push({
      packageName: project.packageName,
      relativeFolder: project.projectRelativeFolder,
      absoluteFolder: project.projectFolder,
    });
  });

  return projects;
};
