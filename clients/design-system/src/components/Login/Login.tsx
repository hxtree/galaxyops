import React from 'react';
import Button from '../Button/Button';

export type LoginProps = {
};

export const Login = (props: LoginProps): JSX.Element => {
  return (
<form className="row g-3">
  <div className="col-auto">
    <label htmlFor="inputUsername" className="visually-hidden">Username</label>
    <input type="text" className="form-control" id="inputUsername" placeholder="Username" required/>
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
  </div>
  <div className="col-auto">
    <Button color='secondary'>Login</Button>
  </div>
</form>  );
};


