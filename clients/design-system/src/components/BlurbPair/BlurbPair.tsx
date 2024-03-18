import React from "react";
import './style.module.scss';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import xss from "xss";

export type BlurbPairProps = {
  iconRight: IconDefinition;
  textRight: string;
  iconLeft: IconDefinition;
  textLeft: string;
}

export const BlurbPair = (props: BlurbPairProps) => {
  const { iconRight, textRight, iconLeft,textLeft } = props;

  return (
    <div className={`blurb container`}>
      <div className={`row gx-5`}>
        <div className="blurb-pair-left col-12 col-md-6 border-end border-1 p-5 text-left">
          <FontAwesomeIcon icon={iconLeft} size={'6x'} className="icon"/>
          <p className="lead mt-4" dangerouslySetInnerHTML={{ __html: xss(textLeft) }} />
        </div>
        <div className="blurb-pair-right col-12 col-md-6 border-start border-1 p-5 text-left">
          <FontAwesomeIcon icon={iconRight} size={'6x'} className="icon"/>
          <p className="lead mt-4" dangerouslySetInnerHTML={{ __html: xss(textRight) }} />
        </div>
      </div>
    </div>
  )
}

export default BlurbPair;
