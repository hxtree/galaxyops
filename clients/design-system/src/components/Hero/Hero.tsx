import React from 'react';
import xss from 'xss';
import { Spacer } from '../Spacer/Spacer';
import { HeroProps } from './HeroProps';
import './style.module.scss';

export const Hero = (props: HeroProps) => {
  const {
    toolbar,
    breadcrumb,
    image,
    imageRight,
    heading,
    lead,
    children,
    pageTier,
    spacing,
  } = props;

  const classNames = ['hero', 'position-relative', 'p-0'];

  return (
    <Spacer {...spacing}>
      <div className={classNames.join(' ')}>
        <div
          className="background-facet"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="px-sm-1 px-md-3 px-lg-5">
          <div className="row">
            {pageTier ?? 0 > 1 ? breadcrumb : ''}
            <div className="col-lg-7 col-sm-12">
              <div className="hero-text-wrapper">
                <div className="hero-text-body mb-md-5 p-2">
                  <h1
                    className="display-3"
                    dangerouslySetInnerHTML={{ __html: xss(heading) }}
                  ></h1>
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{ __html: xss(lead) }}
                  ></p>
                  {children}
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-5 position-relative">
              {imageRight && (
                <img
                  src={imageRight}
                  alt=""
                  className="focal-image img-fluid position-absolute bottom-0 start-50 translate-middle-x"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {toolbar && (
        <div className="hero-toolbar reversed d-none d-lg-block">
          <div className="px-sm-1 px-md-3 px-lg-5 pt-sm-1 pt-2 pb-2 pb-0">
            {toolbar}
          </div>
        </div>
      )}
    </Spacer>
  );
};
