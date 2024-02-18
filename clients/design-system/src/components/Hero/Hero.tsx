import React from 'react';
import './style.module.scss';

export interface HeroProps {
  heading: string;
  lead: string;
  image: string;
  children?: React.ReactNode
}

export const Hero = ({ image, heading, lead, children }: HeroProps) => {
  return (
    <>
      <div className='hero container' style={{backgroundImage: `url(${image})`}}>
        <div className='container p-sm-1 p-md-3 p-lg-5'>
          <div className="row">
            <div className='col-lg-7 col-sm-12'>
              <h1 className='display-3 text-primary'>{heading}</h1>
              <p className="lead text-white">{lead}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
