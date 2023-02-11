import { getChangedProjects } from '../get-changed-projects';

describe('getChangedProjects', () => {
  it('it should return a list', () => {
    const projects = getChangedProjects();

    expect(projects).toBe('object');
  });
});
