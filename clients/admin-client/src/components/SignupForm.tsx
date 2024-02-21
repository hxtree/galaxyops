import { FC, useState } from "react";
import { FontAwesomeIcon, faArrowRight, TextField, Button } from '@cats-cradle/design-system/dist/main';
import React from 'react';

type TSignupForm = {
  title?: string;
};

export const SignupForm: FC<TSignupForm> = ({ title }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function createUser() {
    // Now use the email and password states here
    console.log("Email:", email);
    console.log("Password:", password);
    // await axios.post()
    // set isLoading
  }

  function onClickHandler(event: React.MouseEvent) {
    setIsLoading(true);
    createUser(); // Call createUser when the button is clicked
    console.log(event);
    return;
  }

  return (
    <div>
      <h2>Create an account</h2>
      <div className="mb-3">
        {/* Bind the value and onChange to the email state */}
        <TextField id="email-address" label="Email Address" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        {/* Bind the value and onChange to the password state */}
        <TextField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="mb-3">
        <Button loading={isLoading} onClick={onClickHandler} color="primary">
          Create Account <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </div>
  );
};
