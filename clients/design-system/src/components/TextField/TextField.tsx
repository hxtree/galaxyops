import React from 'react';
import './style.scss';

export type TextFieldProps = {
  id?: string;
  type?: 'password' | 'text' | 'number';
  value?: string | number | undefined;
  label?: string;
  helpBlock?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  invalid?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: string;
  placeholder?: string;
}

// https://getbootstrap.com/docs/5.0/forms/validation/
export const TextField = (props: TextFieldProps): JSX.Element => {
  const { id, label, type, helpBlock, value, size, invalid, onChange, placeholder } = props;

  const classNames = [];
  classNames.push('form-control');
  switch(size){
    case 'small':
      classNames.push('input-group-sm')
      break;
    case 'large':
      classNames.push('input-group-lg')
      break;
    case 'medium':
      default:
  }

  // TODO improve validation
  // TODO add icons left (e.g. $) or right (e.g. calendar)
  // TODO tip tool for info right top

  if(helpBlock){
    return (<>
      {label && <label htmlFor={ id } className="form-label">{ label }</label>}
      <input id={ id } type={ type } value={value} onChange={ onChange } className={classNames.join(' ')} placeholder={placeholder} aria-describedby={ `${id}HelpBlock` }/>
      { helpBlock && <div id={ `${id}HelpBlock` } className="form-text" >{ helpBlock }</div> }
      { invalid && <div className="invalid-feedback">{ invalid }</div>}
    </>)
  }

  return (<>
    {label && <label htmlFor={ id } className="form-label">{ label }</label>}
    <input id={ id } type={ type } value={ value } onChange={ onChange  } className={classNames.join(' ')}  placeholder={placeholder}/>
    { invalid && <div className="invalid-feedback">{ invalid }</div>}
  </>)
};