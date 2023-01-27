import * as rushLib from '@microsoft/rush-lib';

export const getProjects = (configFile?: string) => {
  const rushConfiguration = configFile
    ? rushLib.RushConfiguration.loadFromConfigurationFile(configFile)
    : rushLib.RushConfiguration.loadFromDefaultLocation();

  const projects: any[] = [];

  rushConfiguration.projects.forEach((project: any) => {
    projects.push({
      relativeFolder: project.projectRelativeFolder,
      absoluteFolder: project.projectFolder,
    });
  });

  return projects;
};
