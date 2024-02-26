import React from 'react';
import './style.module.scss';
import xss from 'xss';

export interface HeroProps {
  heading: string;
  lead: string;
  image: string;
  children?: React.ReactNode
  pageTier?: number;
}

export const Hero = (props: HeroProps) => {
  const { image, heading, lead, children, pageTier } = props;

  if(pageTier === 1 || pageTier === undefined){
    return (
      <>
        <div className='hero container' style={{backgroundImage: `url(${image})`}}>
          <div className='container p-sm-1 p-md-3 p-lg-5'>
            <div className="row">
              <div className='col-lg-7 col-sm-12'>
                <h1 className='display-3 text-primary' dangerouslySetInnerHTML={{ __html: xss(heading) }}></h1>
                <p className="lead text-white" dangerouslySetInnerHTML={{ __html: xss(lead) }}></p>
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
        <div className='hero container-fluid' style={{backgroundImage: `url(${image})`}}>
          <div className='container p-sm-1 p-md-3 p-lg-5'>
            <div className="row">
              <div className='col-lg-7 col-sm-12'>
                <h1 className='display-3 text-primary' dangerouslySetInnerHTML={{ __html: xss(heading) }}></h1>
                <p className="lead text-white" dangerouslySetInnerHTML={{ __html: xss(lead) }}></p>
                {children}
              </div>
            </div>
          </div>
        </div>
     </>
    );
}