// import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeTheme } from './hljs-custom';
import { CodeSnippetProps } from './CodeSnippetProps';

const CodeSnippet = (props: CodeSnippetProps) => {
  const { data, language } = props;

  return (
    <div>
      {data ? (
        <SyntaxHighlighter language={language} style={codeTheme}>
          {data}
        </SyntaxHighlighter>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default CodeSnippet;