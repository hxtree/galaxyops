import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

import { IconButton } from '@mui/material';
import './style.module.scss';

export type SocialMediaBarLink = {
  label: string;
  url: string;
  icon: IconDefinition;
}

export type SocialMediaBarProps = {
  socialMedias?: SocialMediaBarLink[];
};

export const SocialMediaBar = (props: SocialMediaBarProps) => {
  const { socialMedias } = props;

  return (
    <div className="social-media-bar">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='logo'></div>
          </div>
          <div className="social-links col align-middle p-3 text-end">
              {socialMedias &&
              socialMedias.map((socialMedia: SocialMediaBarLink) => (
                  <IconButton><FontAwesomeIcon icon={socialMedia.icon} color="white" size="xl"/></IconButton>
              ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBar;