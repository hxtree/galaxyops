import React from 'react';
import './style.module.scss';
import xss from 'xss';

export interface HeroBannerProps {
  breadcrumb?: React.ReactNode;
  heading: string;
  lead: string;
  image?: string;
  background?: string;
  children?: React.ReactNode;
}

export const HeroBanner = (props: HeroBannerProps) => {
  const { breadcrumb, image, background, heading, lead, children } = props;

  const classNames = ['hero-banner', 'p-0'];

  return (
      <div className={classNames.join(' ')}>
        {background &&
          <>
            <div className="hero-facet d-none d-md-block" style={{backgroundImage: `url(${background})`}}></div>
            <div className="hero-gradient-overlay d-none d-md-block"></div>
          </>
        }
        <div className="container py-sm-1 py-md-3 py-lg-5">
            <div className="row g-0">
              {breadcrumb}

              <div className='d-flex flex-column col-lg-7 col-sm-12'>
                <div className='hero-text-wrapper flex-fill reversed p-5'>
                  <h1 className='display-3' dangerouslySetInnerHTML={{ __html: xss(heading) }}></h1>
                  <p className="lead" dangerouslySetInnerHTML={{ __html: xss(lead) }}></p>
                  {children}
                </div>
              </div>

              {image &&
              <div className='d-flex flex-column col-lg-5 col-sm-12'>
                <div className='flex-fill hero-image' style={{backgroundImage: `url(${image})`}}>
                </div>
              </div>}
          </div>
        </div>
      </div>
    );
}