import React from 'react';
import { Meta } from '@storybook/react';
import { BasicCard, BasicCardProps } from '../../../src/main';

export default {
  title: 'Molecules/Card',
  component: BasicCard,
} as Meta<typeof BasicCard>;

export const Default = (args: BasicCardProps) =>
  <div className="row row-cols-1 row-cols-md-3 row-cols-md-4">
    <div className="col mb-3">
      <BasicCard {...args}>
        Welcome to Day
      </BasicCard>
    </div>
    <div className="col mb-3">
      <BasicCard {...args} title="What, Why, When, Where" imageSrc="/sample.jpg">
        Seven out of Ten Cats
      </BasicCard>
    </div>
    <div className="col mb-3">
      <BasicCard {...args} title="Turn-key Property Management" ribbonText='Learn More'>
        How goes property management?
      </BasicCard>
    </div>
  </div>

Default.args = {
  title: 'Welcome To Day',
} as BasicCardProps;