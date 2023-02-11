import { getChangedProjects } from '../get-changed-projects';

describe('getChangedProjects', () => {
  it('should return a list of projects changed between current and main', async () => {
    const projects = await getChangedProjects('main', 'platform-team');
    console.log(projects);
    expect(typeof projects).toEqual('object');
  });
});
