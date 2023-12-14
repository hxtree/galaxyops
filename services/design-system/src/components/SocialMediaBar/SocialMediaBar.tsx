import { Typography } from '../Typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './style.module.scss';

export type SocialMediaBarLink = {
  label: string;
  url: string;
}

export type SocialMediaBarProps = {
  links?: SocialMediaBarLink[];
};

export const SocialMediaBar = (props: SocialMediaBarProps) => {
  const { links } = props;

  return (
    <div className='social-media-bar'>
      <FontAwesomeIcon icon={faGithub} size="2xl"/>
      <FontAwesomeIcon icon={faYoutube} size="2xl"/>
      <FontAwesomeIcon icon={faXTwitter} size="2xl"/>

      {links && <Typography variant="body"><ul>
        {links.map((link: SocialMediaBarLink) => (
          <li><a href={link.url}>{link.label}</a></li>
        ))}</ul></Typography>
      }
    </div>
  );
};

export default SocialMediaBar;