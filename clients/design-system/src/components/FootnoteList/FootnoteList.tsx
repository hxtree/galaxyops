import React from 'react';
import { FootnoteListProps } from './Footnote.type';

// TODO use Context to get an set footnotes
const FootnoteList = (props: FootnoteListProps) => {
  const { footnotes } = props;

  return (
    <div>
      {footnotes.map(footnote => (
        <div key={footnote.id} className="footnote">
          <p>
            <strong>{footnote.id}. </strong>
            {footnote.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FootnoteList;
