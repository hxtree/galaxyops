import React from 'react';
import { Spacer } from '../Spacer/Spacer';
import { DataHighlightsProps } from './DataHighlightsProps';
import './style.module.scss';

export const DataHighlights: React.FC<DataHighlightsProps> = props => {
  const { data, spacing } = props;

  return (
    <Spacer {...spacing} className="d-none d-md-block">
      <div className="data-highlights">
        <div className="row gx-5">
          {data.map((item, index) => (
            <div className="col" key={index}>
              <div className="text-center">
                <div className={`data-highlights-quantity`}>{item.number}</div>
                <div className="data-highlights-description text-muted">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Spacer>
  );
};
