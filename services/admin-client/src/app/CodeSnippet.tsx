import { useEffect, useState } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-json';

export enum CodeSnippetLanguages {
  JSON = 'json',
}

export type CodeSnippetProps = {
  data: string;
  language: CodeSnippetLanguages;
};

export const CodeSnippet = (props: CodeSnippetProps) => {
  const { data, language } = props;
  // const [data, setData] = useState(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-json">
        {typeof window !== 'undefined'
          ? JSON.stringify(data, null, 2)
          : 'Loading...'}
      </code>
    </pre>
  );
};
