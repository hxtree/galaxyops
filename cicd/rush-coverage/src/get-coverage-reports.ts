import fs from 'fs';
import { getProjects } from './get-projects';

export function getCoverageReports(): String[] {
  const coverageFiles: String[] = [];

  const projects = getProjects();

  projects.forEach((project: any) => {
    const projectCoverageFile = `${project.absoluteFolder}/coverage/coverage-final.json`;
    if (fs.existsSync(projectCoverageFile)) {
      coverageFiles.push(projectCoverageFile);
    }
  });

  return coverageFiles;
}
