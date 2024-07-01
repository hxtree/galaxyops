import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  SocialMediaBar,
  SocialMediaBarProps,
  SocialMediaBarLink,
} from './SocialMediaBar';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import '@testing-library/jest-dom';

describe('SocialMediaBar component', () => {
  const socialMedias: SocialMediaBarLink[] = [
    {
      label: 'Facebook',
      url: 'https://facebook.com',
      icon: faGear,
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com',
      icon: faGear,
    },
  ];

  const defaultProps: SocialMediaBarProps = {
    socialMedias,
    spacing: { top: 2 },
  };

  it('renders social media links correctly', () => {
    render(
      <SocialMediaBar
        {...defaultProps}
        spacing={{ top: 1 }}
        testId="social-media-bar"
      />,
    );

    expect(screen.getByTestId('social-media-bar-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('social-media-bar-spacer')).toHaveClass('mt-1');

    expect(
      screen.getByTestId('social-media-bar-icon-0').querySelector('a'),
    ).toHaveAttribute('href', socialMedias[0].url);
    expect(
      screen.getByTestId('social-media-bar-icon-1').querySelector('a'),
    ).toHaveAttribute('href', socialMedias[1].url);
  });
});
