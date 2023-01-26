import * as rushLib from '@microsoft/rush-lib';

export const getProjects = (configFile?: string) => {
  const rushConfiguration = configFile
    ? rushLib.RushConfiguration.loadFromConfigurationFile(configFile)
    : rushLib.RushConfiguration.loadFromDefaultLocation();

  const normalized = rushConfiguration.projects.map(project =>
    Object.assign(project, {
      relativeFolder: project.projectRelativeFolder,
      absoluteFolder: project.projectFolder,
    }),
  );

  return normalized;
};
