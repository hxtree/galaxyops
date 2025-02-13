import { TestRunnerConfig, waitForPageReady } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },

  async postVisit(page, context) {
    await waitForPageReady(page);

    await page.evaluate(() => {
      const spinners = document.querySelectorAll(
        '.spinner-border',
      ) as unknown as HTMLElement[];
      spinners.forEach(spinner => {
        spinner.style.display = 'none';
      });
    });

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};

export default config;
