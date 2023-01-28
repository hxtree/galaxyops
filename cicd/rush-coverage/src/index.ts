import fs from 'fs';
// import { createRequire } from 'module';
// import istanbulCoverage from 'istanbul-lib-coverage';
// import istanbulReport from 'istanbul-lib-report';
// import istanbulReports from 'istanbul-reports';
import { getProjects } from './get-projects';

// const destination = '../coverage/coverage-final.json';
const projects = getProjects();
const coverageFiles: String[] = [];

projects.forEach((project: any) => {
  const projectCoverageFile = `${project.projectFolder}/coverage/lcov.info`;
  if (fs.existsSync(projectCoverageFile)) {
    coverageFiles.push(projectCoverageFile);
  }
});

console.log(coverageFiles);

// TODO combine all coverage reports

// const map = istanbulCoverage.createCoverageMap();

// // Object.keys(coverage).forEach(filename =>
// //   map.addFileCoverage(mapFileCoverage(coverage[filename])),
// // );

// // const context = istanbulReport.createContext({ coverageMap: map });

// // ['lcov'].forEach(reporter =>
// //   istanbulReports.create(reporter, {}).execute(context),
// // );
