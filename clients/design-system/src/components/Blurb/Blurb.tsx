import React from "react";
import './style.module.scss';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export type BlurbProps = {
  iconRight: IconDefinition;
  textRight: string;
  iconLeft: IconDefinition;
  textLeft: string;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Blurb = (props: BlurbProps) => {
  const { iconRight, textRight, iconLeft,textLeft } = props;

  return (
    <div className={`blurb container`}>
      <div className={`row gx-5`}>
        <div className="col border-end border-1 p-5 text-center">
          <FontAwesomeIcon icon={iconLeft} size={'6x'} className="icon"/>
          <p className="lead mt-4">
            { textLeft }
          </p>
        </div>
        <div className="col border-start border-1 p-5 text-center">
          <FontAwesomeIcon icon={iconRight} size={'6x'} className="icon"/>
          <p className="lead mt-4">
            { textRight }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blurb;
