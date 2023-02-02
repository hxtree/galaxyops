import { getProjects } from '../get-projects';

describe('getProjects', () => {
  it('it should return a list of projects that inclues this package', () => {
    const projects = getProjects();

    expect(projects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          packageName: '@org-cicd/rush-coverage',
          relativeFolder: 'platform/rush-coverage',
        }),
      ]),
    );
  });
});
