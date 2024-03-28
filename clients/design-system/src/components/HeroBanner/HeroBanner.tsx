import React from 'react';
import './style.module.scss';
import xss from 'xss';

export interface HeroBannerProps {
  breadcrumb?: React.ReactNode;
  heading: string;
  lead: string;
  image: string; // TODO change to background image
  children?: React.ReactNode;
}

export const HeroBanner = (props: HeroBannerProps) => {
  const { breadcrumb, image, heading, lead, children } = props;

  const classNames = ['hero-banner', 'p-0'];

  return (
      <div className={classNames.join(' ')}>
        <div className="hero-facet" style={{backgroundImage: `url(${image})`}}></div>
        <div className="container pt-sm-1 pt-md-3 pt-lg-5 pb-0">
            <div className="row">
              {breadcrumb}
              <div className='col-lg-7 col-sm-12'>
                <div className='hero-text-wrapper reversed mb-md-5 p-5'>
                  <h1 className='display-3' dangerouslySetInnerHTML={{ __html: xss(heading) }}></h1>
                  <p className="lead" dangerouslySetInnerHTML={{ __html: xss(lead) }}></p>
                  {children}
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}