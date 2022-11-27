import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  label: string;
}

/**
 * This is a default button
 * @param param0
 * @returns
 */
export const Button = ({
  variant = 'primary',
  label = 'Button',
  ...props
}: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        padding: '1em',
      }}
    >
      {label}
    </button>
  );
};
