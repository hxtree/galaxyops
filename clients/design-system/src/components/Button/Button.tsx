import React from 'react';
import Spinner from '../Spinner/Spinner';
import './style.module.scss';

export enum ButtonSize {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

export enum ButtonVariant {
  'default' = 'default',
  'contained' = 'contained',
}

export type ButtonProps = {
  loading?: boolean;
  children: React.ReactNode;
  color?:'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark';
  variant?:  keyof typeof ButtonVariant;
  selected?: boolean;
  size?: keyof typeof ButtonSize;
  href?: string; // TODO add support
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  testId?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref): JSX.Element => {
  const { disabled, testId, href, loading, color, children, variant, selected, size, onClick } = props;

  const classNames: string[] = ['button'];

  if(color){
    classNames.push(`button-${color}`);
  }

  if(selected){
    classNames.push('button-selected')
  }

  if(loading){
    classNames.push('button-loading')
  }

  if(selected){
    classNames.push('button-selected')
  }

  if(variant){
    classNames.push(`button-${variant}`)
  }

  if(size){
    classNames.push(`button-${size}`)
  } else {
    classNames.push(`button-medium`)
  }

  let onClickHandler;
  let isButtonDisabled = false;

  if(disabled){
    isButtonDisabled = true;
    classNames.push(`button-disabled`)
  } else if (onClick !== undefined) {
    onClickHandler = onClick;
  } else if(href){
    onClickHandler = () => { window.location.href = href};
  }

  return (
    <button
      disabled={isButtonDisabled}
      className={classNames.join(' ')}
      onClick={ onClickHandler }
      ref={ref}
      data-testid={testId}
    >
      {loading && <Spinner color="light" size="small"/>}
      {children}
    </button>
  );
});

export default Button;