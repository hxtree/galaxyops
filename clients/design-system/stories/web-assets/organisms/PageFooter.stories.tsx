import React from 'react';
import { Meta } from '@storybook/react';
import { PageFooter, PageFooterProps } from '../../../src/main';
import {
  faGithub,
  faYoutube,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default {
  title: 'Web Assets/Organisms/PageFooter',
  component: PageFooter,
} as Meta<typeof PageFooter>;

export const Default = (args: PageFooterProps) => (
  <PageFooter {...args}></PageFooter>
);

Default.args = {
  siteOwner: "Cat's Cradle",
  socialMedias: [
    {
      icon: faGithub,
      label: 'Github',
      url: 'https://github.com/hxtree/galaxyops',
    },
    {
      icon: faYoutube,
      label: 'Youtube',
      url: 'https://github.com/hxtree/galaxyops',
    },
    {
      icon: faXTwitter,
      label: 'XTwitter',
      url: 'https://github.com/hxtree/galaxyops',
    },
  ],
};
