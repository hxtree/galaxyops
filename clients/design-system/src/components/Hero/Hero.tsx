import React from 'react';
import './style.module.scss';
import xss from 'xss';

export interface HeroProps {
  breadcrumb?: React.ReactNode;
  heading: string;
  lead: string;
  image: string;
  children?: React.ReactNode;
  pageTier?: number;
  toolbar?: React.ReactNode;
}

export const Hero = (props: HeroProps) => {
  const { toolbar, breadcrumb, image, heading, lead, children, pageTier } = props;

  if(pageTier === 1 || pageTier === undefined){
    return (
      <>
        <div className='hero container' style={{backgroundImage: `url(${image})`}}>
          <div className='container p-sm-1 p-md-3 p-lg-5'>
            <div className="row">
              <div className='col-lg-7 col-sm-12'>
                <h1 className='display-3' dangerouslySetInnerHTML={{ __html: xss(heading) }}></h1>
                <p className="lead" dangerouslySetInnerHTML={{ __html: xss(lead) }}></p>
                {children}
              </div>
            </div>
          </div>
        </div>
     </>
    )
  }

  return (
    <>
        <div className='hero position-relative container-fluid g-0 overflow-hidden mb-5' style={{backgroundImage: `url(${image})`}}>
          <div className='container p-sm-1 p-md-3 p-lg-5 pt-0'>
            <div className="row">
              {breadcrumb}
              <div className='col-lg-7 col-sm-12'>
                <h1 className='display-3' dangerouslySetInnerHTML={{ __html: xss(heading) }}></h1>
                <p className="lead" dangerouslySetInnerHTML={{ __html: xss(lead) }}></p>
                {children}
              </div>
            </div>
          </div>

        {toolbar && (
          <div className="toolbar position-absolute bottom-0 w-100">
            <div className='container p-4'>
              {toolbar}
            </div>
          </div>
        )}
        </div>
     </>
    );
}