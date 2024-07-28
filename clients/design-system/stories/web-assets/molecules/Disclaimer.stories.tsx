import React from 'react';
import { Meta } from '@storybook/react';
import { Disclaimer, DisclaimerProps } from '../../../src/main';

export default {
  title: 'Web Assets/Molecules/Disclaimer',
  component: Disclaimer,
} as Meta<typeof Disclaimer>;

export const Default = args => (
  <Disclaimer {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit
      quis justo consectetur vehicula. Nullam vel lacus ut magna tincidunt
      dapibus. Phasellus convallis ligula eu eros consequat, quis malesuada
      dolor posuere. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae; Ut a leo ultrices, maximus elit id,
      vehicula mauris. Vivamus at elit et libero aliquet euismod. Quisque
      vestibulum tempor ligula, ac pellentesque arcu eleifend non. Cras quis
      orci et ligula commodo hendrerit. Fusce quis neque quam.
    </p>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Morbi eget massa nec velit vestibulum scelerisque vel a
      velit. Duis nec turpis ut orci fringilla tincidunt. Donec tincidunt purus
      vel interdum cursus. Ut vel ligula in mi fermentum fringilla ac sit amet
      justo. Nam tristique erat eget eros maximus, at sagittis libero
      ullamcorper. Duis non odio mi. Nulla facilisi. Suspendisse lacinia
      ullamcorper sodales. Fusce eget turpis nisi. Nulla euismod accumsan nisi,
      vel finibus augue.
    </p>
    <p>
      Aenean eleifend ligula nec quam iaculis, sed ultrices ligula fringilla.
      Etiam non ligula sit amet neque dapibus lobortis. Sed lobortis ipsum nec
      justo sollicitudin laoreet. Integer id mauris sit amet eros fringilla
      iaculis. Nam eu justo nisi. Duis vehicula turpis at erat congue, vel
      sollicitudin orci sodales. Curabitur a augue sit amet lorem eleifend
      aliquam sit amet sit amet elit. Phasellus efficitur, lorem vel volutpat
      ultricies, lacus felis bibendum eros, in laoreet sapien nisl sed tortor.
    </p>
    <p>
      Suspendisse potenti. Proin fringilla tortor a hendrerit facilisis. Nullam
      ultrices mauris vel nisl egestas lacinia. Sed viverra auctor quam, id
      cursus nunc pellentesque sed. Proin non turpis at lacus tempor dignissim
      in sed leo. Nullam efficitur orci dui, eu scelerisque lorem tempus sed.
      Nullam congue velit auctor, faucibus nulla at, pellentesque risus. Integer
      posuere ut nisi eu tincidunt. Sed nec sapien quis sem rutrum lobortis.
      Nullam dignissim ante non tortor feugiat feugiat. Duis vel leo vel orci
      accumsan suscipit in non quam.
    </p>
  </Disclaimer>
);

Default.args = {} as DisclaimerProps;
