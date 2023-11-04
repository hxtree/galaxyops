import { getProjects } from '../get-projects';

describe('getProjects', () => {
  it('it should return a list of projects that includes this package', () => {
    const projects = getProjects();

    expect(projects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          packageName: '@cats-cradle/rush-coverage',
          relativeFolder: 'platform/cli-tools/rush-coverage',
        }),
      ]),
    );
  });
});
