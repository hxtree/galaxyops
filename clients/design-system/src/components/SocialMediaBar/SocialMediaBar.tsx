import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Spacer } from '../Spacer/Spacer';
import { SpacerProps } from '../Spacer/SpacerProps.type';
import { IconButton } from '@mui/material';
import './style.module.scss';

export type SocialMediaBarLink = {
  label: string;
  url: string;
  icon: IconDefinition;
};

export type SocialMediaBarProps = {
  socialMedias?: SocialMediaBarLink[];
  spacing?: SpacerProps;
};

export const SocialMediaBar = (props: SocialMediaBarProps) => {
  const { socialMedias, spacing } = props;

  return (
    <Spacer {...spacing}>
      <div className="social-media-bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="logo"></div>
            </div>
            <div className="social-links col align-middle p-3 text-end">
              {socialMedias &&
                socialMedias.map((socialMedia: SocialMediaBarLink) => (
                  <IconButton key={socialMedia.icon.iconName}>
                    <FontAwesomeIcon
                      icon={socialMedia.icon}
                      color="white"
                      size="xl"
                    />
                  </IconButton>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Spacer>
  );
};

export default SocialMediaBar;
