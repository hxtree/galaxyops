import { Paper, Link, Button, TextField, faArrowRight, FontAwesomeIcon } from '@cats-cradle/design-system/dist/main';
import React from 'react';

export default function SignupPage() {
  function onClickHandler(event: React.MouseEvent){
    console.log(event);
    return;
  }

  return (
    <main className="container">
      <div className="row gy-5 align-items-stretch">
        <div className='col-lg-6 col-sm-12'>
          <Paper elevation="1" className='bgBrandDark p-5'>
          <h1 className='text-white'>Signup</h1>
            <p className='text-white'>
              Signing up for a new personal account.
              Follow the prompts to create your personal account.
            </p>
          </Paper>
        </div>
        <div className='col-lg-6 col-sm-12 order-last'>
          <Paper elevation="1" className='p-5'>
            <div>
            <h2>Create an account</h2>
              <div className="mb-3">
                <TextField id="email-address" label="Email Address" type="text"/>
              </div>
              <div className="mb-3">
                <TextField id="password" label="Password" type="password"/>
              </div>
              <div className="mb-3">
                <Button onClick={onClickHandler} color="primary">Create Account <FontAwesomeIcon icon={faArrowRight}/></Button>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </main>
  );
}
