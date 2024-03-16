import React from 'react';
import './style.module.scss';

export enum CardRibbonColor {
  PRIMARY='primary',
  SECONDARY='secondary',
  TERIARY='tertiary',
}

export type BasicCardProps = {
  title?: string;
  body?: string;
  url?: string;
  imageSrc?: string;
  ribbonText?: string;
  ribbonColor?: CardRibbonColor;
  testId?: string;
  children?: React.ReactNode;
};

// TODO finish fleshing in basic card props
export const BasicCard = (props: BasicCardProps): JSX.Element => {
  const { ribbonText, ribbonColor, body, title, imageSrc, testId, children } = props;

  const ribbonClasses = [
    'card-ribbon',
    'px-4',
  ];
  if(ribbonColor) {
    ribbonClasses.push(`card-ribbon-${ribbonColor}`);
  } else {
    ribbonClasses.push(`card-ribbon-${CardRibbonColor.TERIARY}`);
  }

  return (
    <div className="card h-100 border-radius-4">
      <div className='card-thumbnail'>
        <div className="card-img-top-wrapper">
          <div className="card-img-top" style={{background: `url(${imageSrc})`}}/>
        </div>
        {ribbonText &&
          <div className={ribbonClasses.join(' ')} data-testid={testId ? `${testId}-card-ribbon` : null}>
          {ribbonText}
          </div>
        }
      </div>
      <div className="card-body p-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body}
        </p>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}