import React from 'react';
import { useRef } from 'react';

export type CheckboxProps = {
  checked?: boolean;
  testId?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const { checked, testId } = props;

  return <input type="checkbox" data-testid={testId} ref={ref} checked={checked}/>;
});

export default Checkbox;