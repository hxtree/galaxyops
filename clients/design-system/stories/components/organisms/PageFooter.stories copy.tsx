import React from 'react';
import { Meta } from '@storybook/react';
import { PageFooter, PageFooterProps } from '../../../src/main';

export default {
  title: 'Organisms/PageFooter',
  component: PageFooter,
} as Meta<typeof PageFooter>;

export const Default = (args: PageFooterProps) => <PageFooter {...args}></PageFooter>;

Default.args = {
  siteOwner: 'Cat\'s Cradle',
};

import { faGithub, faYoutube, faXTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';

const socialMedias = [
  {icon: faGithub, label: 'Github', url: 'https://github.com/hxtree/cats-cradle'},
  {icon: faYoutube, label: 'Youtbe',  url: 'https://github.com/hxtree/cats-cradle'},
  {icon: faXTwitter, label: 'XTwitter',  url: 'https://github.com/hxtree/cats-cradle'}
]
