import {
  RushConfiguration,
  RushConfigurationProject,
} from '@microsoft/rush-lib';

export type ProjectType = {
  packageName: string;
  relativeFolder: string;
  absoluteFolder: string;
};

/**
 * Get Projects from Rush.json
 *
 * Tags can be used to generate coverage reports for projects tagged only with certain words
 *
 * @param configFile optional parameter to specify the config file
 * @param tag optional parameter to collect projects with specific tags
 * @returns
 */
export const getProjects = (
  configFile?: string,
  tag?: string,
): ProjectType[] => {
  const rushConfiguration = configFile
    ? RushConfiguration.loadFromConfigurationFile(configFile)
    : RushConfiguration.loadFromDefaultLocation();

  const projects: ProjectType[] = [];

  rushConfiguration.projects.forEach((project: RushConfigurationProject) => {
    if (tag === undefined || project.tags.has(tag)) {
      projects.push({
        packageName: project.packageName,
        relativeFolder: project.projectRelativeFolder,
        absoluteFolder: project.projectFolder,
      });
    }
  });

  return projects;
};
