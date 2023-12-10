import React from 'react';
import { Meta } from '@storybook/react';
import { CodeSnippet, CodeSnippetLanguages } from '../../../src/main';

export default {
  title: 'Molecules/CodeSnippet',
  component: CodeSnippet,
} as Meta<typeof CodeSnippet>;

export const Html = args => <CodeSnippet {...args} />;

Html.args = {
  language: CodeSnippetLanguages.HTML,
  data: `<div>
  <p>Hello, world!</p>
</div>`,
};

export const Json = args => <CodeSnippet {...args} />;

Json.args = {
  language: CodeSnippetLanguages.JSON,
  data: `{
    "success": true,
    "error": null,
    "response" : [
      {
        "type": "Feature",
        "id": "44.96,-93.37",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -93.27,
            44.96
          ]
        }
      }
    ]
  }`,
};

export const Css = args => <CodeSnippet {...args} />;

Css.args = {
  language: CodeSnippetLanguages.CSS,
  data: `a {
    color: "red"
}`,
};

export const Javascript = args => <CodeSnippet {...args} />;

Javascript.args = {
  language: CodeSnippetLanguages.JAVASCRIPT,
  data: `console.log('Hello, World');`,
};
