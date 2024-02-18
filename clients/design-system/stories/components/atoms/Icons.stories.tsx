import React from 'react';
import { Meta } from '@storybook/react';
import {
  FontAwesomeIcon,
  faCog,
  faDice,
  faBook,
  faAddressCard,
  faChevronCircleLeft,
  faChevronCircleRight,
  faBars,
  faArrowRight,
  faCheck,
  faPlay,
  faStop,
  faPause,
  faRepeat,
  faGithub,
  Paper,
  Alert
} from '../../../src/main';

export default {
  title: 'Atoms/Icons',
  component: FontAwesomeIcon,
} as Meta<typeof FontAwesomeIcon>;

export const Default = () => {
  const icons = [
    { icon: faCog, name: 'faCog' },
    { icon: faDice, name: 'faDice' },
    { icon: faBook, name: 'faBook' },
    { icon: faAddressCard, name: 'faAddressCard' },
    { icon: faChevronCircleLeft, name: 'faChevronCircleLeft' },
    { icon: faChevronCircleRight, name: 'faChevronCircleRight' },
    { icon: faBars, name: 'faBars' },
    { icon: faArrowRight, name: 'faArrowRight' },
    { icon: faCheck, name: 'faCheck' },
    { icon: faPlay, name: 'faPlay' },
    { icon: faStop, name: 'faStop' },
    { icon: faPause, name: 'faPause' },
    { icon: faRepeat, name: 'faRepeat' },
    { icon: faGithub, name: 'faGithub' }
  ];

  return (
    <>
      <Alert severity="info">
        Explore a wider range of icons in the <a href="https://fontawesome.com/v6/icons?o=r&m=free" target="_blank" rel="noopener noreferrer">FontAwesome Library</a>,
        offering an extensive collection of fonts that are not yet integrated but can easily be added to the design system.
      </Alert>
      <div className="d-flex flex-wrap">
        {icons.map(({ icon, name }, index) => (
          <div className="mx-4 mb-5" key={index}>
            <Paper elevation="6" className="d-flex flex-column justify-content-center align-items-center rounded position-relative" style={{ width: '100px', height: '100px', padding: '4px' }} elevation='2'>
              <FontAwesomeIcon size='2x' icon={icon} className="position-absolute top-50 start-50 translate-middle" />
              <div className="text-muted position-absolute start-50 bottom-0 translate-middle" style={{ fontSize: "0.6rem", marginBottom: "1px" }}>{name}</div>
            </Paper>
          </div>
        ))}
      </div>
    </>
  );
};
