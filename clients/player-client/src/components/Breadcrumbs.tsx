import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useBreadcrumbs } from './useBreadcrumbs';

type TBreadCrumbs = {
  title?: string;
};

export const BreadCrumbs: FC<TBreadCrumbs> = ({ title }) => {
  const crumbs = useBreadcrumbs();

  const lastCrumb = crumbs[crumbs.length - 1];
  if (lastCrumb.url === '/') {
    return;
  }

  return (
    <nav className="container" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {crumbs.map((crumb, index) =>
          index !== crumbs.length - 1 ? (
            <li
              className="breadcrumb-item active"
              aria-current="page"
              key={index}
            >
              <Link to={crumb.url}>{crumb.title}</Link>
            </li>
          ) : (
            <li
              className="breadcrumb-item active"
              aria-current="page"
              key={index}
            >
              <span>{title ? title : crumb.title}</span>
            </li>
          ),
        )}
      </ol>
    </nav>
  );
};
