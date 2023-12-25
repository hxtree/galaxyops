import React from 'react';
import { Meta } from '@storybook/react';
import { SocialMediaBar, SocialMediaBarProps } from '../../../src/main';
import { faGithub, faYoutube, faXTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export default {
  title: 'Organisms/SocialMediaBar',
  component: SocialMediaBar,
} as Meta<typeof SocialMediaBar>;

export const Default = (args: SocialMediaBarProps) => <SocialMediaBar {...args}></SocialMediaBar>;

Default.args = {
  socialMedias: [
    {icon: faGithub, label: 'Github', url: 'https://github.com/hxtree/cats-cradle'},
    {icon: faYoutube, label: 'Youtbe',  url: 'https://github.com/hxtree/cats-cradle'},
    {icon: faXTwitter, label: 'XTwitter',  url: 'https://github.com/hxtree/cats-cradle'}
  ]
};
