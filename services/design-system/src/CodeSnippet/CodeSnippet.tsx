import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeTheme } from './hljs-custom';

export enum CodeSnippetLanguages {
  JSON = 'json',
  HTML = 'html',
  CSS = 'css',
  JAVASCRIPT = 'javascript',
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
        <SyntaxHighlighter language={language} style={codeTheme as any}>
          {data}
        </SyntaxHighlighter>
      ) : (
        'Loading...'
      )}
    </div>
  );
};
