import React, { useState } from 'react';
import './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CardRibbonColor } from './CardRibbonColor.type';

export type BasicCardProps = {
  title?: string;
  url?: string;
  cta?: string;
  imageSrc?: string;
  ribbonText?: string;
  ribbonColor?: CardRibbonColor;
  testId?: string;
  children?: React.ReactNode;
};

// TODO finish fleshing in basic card props
export const BasicCard = (props: BasicCardProps): JSX.Element => {
  const { ribbonText, ribbonColor, title, imageSrc, testId, url, cta, children } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
    <div
      className="card h-100 border-radius-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
      <div className="card-body px-4 py-3">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {children}
        </p>
      </div>
      <div className="card-footer d-flex px-4 py-3">
        <span className="card-link flex-fill">
          {cta}
        </span>
        <span className="icon text-end flex-fill">
            <FontAwesomeIcon icon={isHovered ? faArrowRight: faChevronRight} />
        </span>
      </div>
      <a href={url} className="stretched-link"></a>
    </div>
  )
}