import { Typography } from '../Typography/Typography';
import './style.module.scss';

export type PageFooterLink = {
  label: string;
  url: string;
}

export type PageFooterProps = {
  siteOwner: string;
  links: PageFooterLink[];
};

export const PageFooter = (props: PageFooterProps) => {
  const { links, siteOwner } = props;

  const year = new Date().getFullYear();

  return (
    <footer className='page-footer'>
      {links && <ul>
        {links.map((link: PageFooterLink) => (
          <li><a href={link.url}>{link.label}</a></li>
        ))}</ul>
      }
      <hr/>
      <Typography variant="body">
        &copy; {year} {siteOwner}. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default PageFooter;