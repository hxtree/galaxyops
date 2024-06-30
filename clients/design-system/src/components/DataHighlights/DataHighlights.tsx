import React from 'react';
import Spacer from '../Spacer/Spacer';
import { DataHighlightsProps } from './DataHighlightsProps';

export const DataHighlights: React.FC<DataHighlightsProps> = props => {
  const { data, spacing } = props;
  const colorClass = 'primary';

  return (
    <Spacer {...spacing}>
      <div className="container mt-4">
        <div className="row">
          {data.map((item, index) => (
            <div className="col" key={index}>
              <div className="text-center">
                <h2 className={`text-${colorClass}`}>{item.number}</h2>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Spacer>
  );
};
