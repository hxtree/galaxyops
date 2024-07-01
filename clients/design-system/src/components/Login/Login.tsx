import React from 'react';
import Button from '../Button/Button';
import { LoginVariant } from './LoginVariant.type';

export type LoginProps = {
  variant?: LoginVariant;
};

export const Login = (props: LoginProps): JSX.Element => {
  const { variant } = props;

  if (variant === LoginVariant.DEFAULT) {
    return <>Coming soon</>;
  }

  return (
    <form className="row g-3">
      <div className="col-auto">
        <label htmlFor="inputUsername" className="visually-hidden">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="inputUsername"
          placeholder="Username"
          required
        />
      </div>
      <div className="col-auto">
        <label htmlFor="inputPassword" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          required
        />
      </div>
      <div className="col-auto">
        <Button color="primary">Login</Button>
      </div>
    </form>
  );
};
