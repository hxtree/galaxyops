import { Typography } from '../Typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faXTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { IconButton } from '@mui/material';
import './style.module.scss';

export type SocialMediaBarLink = {
  label: string;
  url: string;
  icon: IconDefinition;
}

export type SocialMediaBarProps = {
  links?: SocialMediaBarLink[];
};

export const SocialMediaBar = (props: SocialMediaBarProps) => {
  const { links } = props;

  const socialMedias = [
    {icon: faGithub, label: 'Github', url: 'https://github.com/hxtree/cats-cradle'},
    {icon: faYoutube, label: 'Youtbe',  url: 'https://github.com/hxtree/cats-cradle'},
    {icon: faXTwitter, label: 'XTwitter',  url: 'https://github.com/hxtree/cats-cradle'}
  ]

  return (
    <div className="social-media-bar">
      <div>
        {socialMedias && <Typography variant="body"><ul>
        {socialMedias.map((socialMedia: SocialMediaBarLink) => (
            <IconButton><FontAwesomeIcon icon={socialMedia.icon} color="white" size="xl"/></IconButton>
        ))}</ul></Typography>
      }
      </div>
    </div>
  );
};

export default SocialMediaBar;