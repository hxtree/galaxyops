import React from 'react';
import './style.module.scss';
import xss from 'xss';

export interface HeroProps {
  breadcrumb?: React.ReactNode;
  heading: string;
  lead: string;
  image: string; // TODO change to background image
  imageRight?: string;
  children?: React.ReactNode;
  pageTier?: number;
  toolbar?: React.ReactNode;
}

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
  } = props;

  const classNames = ['hero', 'position-relative', 'p-0'];

  let containerClasses = 'container-fluid g-0 overflow-hidden';
  if (pageTier === 1 || pageTier === undefined) {
    containerClasses = 'container';
  }

  return (
    <>
      <div className={containerClasses}>
        <div className={classNames.join(' ')}>
          <div
            className="backgroundFacet"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="px-sm-1 px-md-3 px-lg-5 pt-sm-1 pt-md-3 pt-lg-5 pb-0">
            <div className="row">
              {pageTier ?? 0 > 1 ? breadcrumb : ''}
              <div className="col-lg-7 col-sm-12">
                <div className="hero-text-wrapper mb-md-5 p-2">
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
          <div className="hero-toolbar d-none d-lg-block">
            <div className="px-4 py-4">{toolbar}</div>
          </div>
        )}
      </div>
    </>
  );
};
