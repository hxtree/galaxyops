import React from 'react';
import { Meta } from '@storybook/react';
import { BasicCard, BasicCardProps } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Card',
  component: BasicCard,
} as Meta<typeof BasicCard>;

export const Default = (args: BasicCardProps) => (
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
    <div className="col mb-3">
      <BasicCard {...args}>Welcome to Day</BasicCard>
    </div>
    <div className="col mb-3">
      <BasicCard
        {...args}
        title="What, Why, When, Where"
        imageSrc="/sample.jpg"
      >
        Seven out of Ten Cats
      </BasicCard>
    </div>
    <div className="col mb-3">
      <BasicCard
        {...args}
        title="Turn-key Property Management"
        ribbonText="50% Off"
        cta="Learn More"
        url="https://example.com"
      >
        How goes property management?
      </BasicCard>
    </div>
  </div>
);

Default.args = {
  title: 'Welcome To Day',
  imageSrc: 'https://placehold.co/600x400',
} as BasicCardProps;
