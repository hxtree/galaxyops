import React from 'react';
import { Spacer } from '../Spacer/Spacer';
import { DisclaimerProps } from './DisclaimerProps';

export const Disclaimer = (props: DisclaimerProps) => {
  const { spacing, children } = props;

  return (
    <Spacer {...spacing}>
      <div className="disclaimer pt-4 pb-3">
        <div className="container">{children}</div>
      </div>
    </Spacer>
  );
};
