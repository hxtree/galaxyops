import { Paper, Link, Button, TextField, faArrowRight, FontAwesomeIcon } from '@galaxyops/design-system/dist/main';
import React from 'react';

export default function LoginPage() {
  function onClickHandler(event: React.MouseEvent){
    console.log(event);
    return;
  }

  return (
    <main className="container mt-5">
      <Paper elevation="1" className='p-5'>
        <h1>Log In</h1>
        <div className="mb-3">
          <TextField id="email-address" label="Email Address" type="text"/>
        </div>
        <div className="mb-3">
          <Link href="/forgot-password">Forgot Password</Link>
          <TextField id="password" label="Password" type="password"/>
        </div>
        <div className="mb-3">
          <Button onClick={onClickHandler} color="primary">Log In <FontAwesomeIcon icon={faArrowRight}/></Button>
        </div>
      </Paper>
    </main>
  );
}
