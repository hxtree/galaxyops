import React, { useEffect } from 'react';
import Prism from 'prismjs';

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
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
