import React from 'react';
import { Meta } from '@storybook/react';
import {
  FontAwesomeIcon,
  Tabs,
  TabsProps,
  faAddressCard,
  faBars,
  faBook,
  faCheck,
  faGithub,
} from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Tab',
  component: Tabs,
  argTypes: {},
} as Meta<typeof Tabs>;

const args: TabsProps = {
  tabs: [
    {
      title: <FontAwesomeIcon size="4x" icon={faCheck} />,
      content: <p>Tab 1 content</p>,
    },
    {
      title: <FontAwesomeIcon size="4x" icon={faBook} />,
      content: <p>Tab 2 content</p>,
    },
    {
      title: <FontAwesomeIcon size="4x" icon={faGithub} />,
      content: <p>Tab 3 content</p>,
    },
    {
      title: <FontAwesomeIcon size="4x" icon={faAddressCard} />,
      content: <p>Tab 4 content</p>,
    },
    {
      title: <FontAwesomeIcon size="4x" icon={faBars} />,
      content: <p>Tab 5 content</p>,
    },
  ],
};

export const Default = () => <Tabs {...args} />;
