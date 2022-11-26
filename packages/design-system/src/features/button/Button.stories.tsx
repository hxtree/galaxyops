import {withA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {Button} from './Button';
storiesOf('button', module)
  .add('Accessible', () => <button>Accessible button</button>)
  .add('Inaccessible', () => (
    <button style={{backgroundColor: 'red', color: 'darkRed'}}>
      Inaccessible button
    </button>
  ));
