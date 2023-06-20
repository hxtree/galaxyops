import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import hljsCustom from './styles/hljs-custom';

export enum CodeSnippetLanguages {
  JSON = 'json',
}

export type CodeSnippetProps = {
  data: string;
  language: CodeSnippetLanguages;
};

export const CodeSnippet = (props: CodeSnippetProps) => {
  const { data, language } = props;

  return (
    <div>
      {data ? (
        <SyntaxHighlighter language="json" style={hljsCustom as any}>
          {JSON.stringify(data, null, 2)}
        </SyntaxHighlighter>
      ) : (
        'Loading...'
      )}
    </div>
  );
};
