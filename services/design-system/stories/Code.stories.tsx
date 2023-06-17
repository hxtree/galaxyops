import React from 'react';
import { Meta } from '@storybook/react';
import { Code, CodeProps } from '../src/Code';

export default {
  title: 'Components/Code',
  component: Code,
} as Meta<typeof Code>;

export const Html = args => <Code {...args} />;

Html.args = {
  language: 'html',
  code: `<div>
  <p>Hello, world!</p>
</div>`,
};

export const Json = args => <Code {...args} />;

Json.args = {
  language: 'json',
  code: `{
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

export const Css = args => <Code {...args} />;

Css.args = {
  language: 'css',
  code: `a {
    color: "red"
}`,
};

export const Javascript = args => <Code {...args} />;

Javascript.args = {
  language: 'javascript',
  code: `console.log('Hello, World');`,
};
