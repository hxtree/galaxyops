import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './prism.css';

export interface CodeProps {
  code: string;
  language: string;
}

export const Code = (props: CodeProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { language, code } = props;

  return (
    <div className="Code" data-prismjs-copy-timeout="500">
      <pre>
        <code className={`language-${language}`} data-prismjs-copy="Copy">
          {code}
        </code>
      </pre>
    </div>
  );
};
