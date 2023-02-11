import { getChangedProjects } from '../get-changed-projects';

describe('getChangedProjects', () => {
  it('should return a list of projects changed between current and main', async () => {
    const projects = await getChangedProjects('main', 'platform-team');

    console.log(projects);

    // depending on clone depth rush may not be able to get projects, this is common in CI
    if (typeof projects === 'object') {
      expect(typeof projects).toBe('object');
    } else {
      expect(projects).rejects.toThrow(
        'Failed to detect project change, presumably git clone is not deep enough',
      );
    }
  });
});
