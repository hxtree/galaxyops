import Link from '../Link/Link';
import SocialMediaBar, {
  SocialMediaBarLink,
} from '../SocialMediaBar/SocialMediaBar';
import { Typography } from '../Typography/Typography';
import './style.module.scss';
import { SpacerProps } from '../Spacer/SpacerProps.type';
import { Spacer } from '../Spacer/Spacer';

export type PageFooterLink = {
  label: string;
  url: string;
};

export type PageFooterProps = {
  siteOwner: string;
  links: PageFooterLink[];
  socialMedias?: SocialMediaBarLink[];
  spacing?: SpacerProps;
};

export const PageFooter = (props: PageFooterProps) => {
  const { socialMedias, links, siteOwner, spacing } = props;

  const year = new Date().getFullYear();

  return (
    <Spacer {...spacing}>
      <SocialMediaBar socialMedias={socialMedias} />
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            {links &&
              links.map((link: PageFooterLink, index: number) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <Typography variant="body">
                    <Link href={link.url}>{link.label}</Link>
                  </Typography>
                </div>
              ))}
          </div>
          <hr />
          <Typography variant="body">
            &copy; {siteOwner}. {year}. All Rights Reserved.
          </Typography>
        </div>
      </footer>
    </Spacer>
  );
};

export default PageFooter;
