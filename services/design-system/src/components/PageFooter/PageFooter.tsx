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
      <p>&copy; {year} {siteOwner}. All Rights Reserved.</p>
    </footer>
  );
};

export default PageFooter;