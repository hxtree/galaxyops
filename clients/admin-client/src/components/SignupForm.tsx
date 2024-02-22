import { FC, useState } from "react";
import { FontAwesomeIcon, faArrowRight, TextField, Button } from '@cats-cradle/design-system/dist/main';
import React from 'react';
import axios from 'axios';

type TSignupFormProps = {
  title?: string;
};

enum TSignupFormType {
  SignUp,
  Verify
}

export const SignupForm: FC<TSignupFormProps> = ({ title }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [securityCode, setSecurityCode] = useState<string>('');
  const [currentForm, setCurrentForm] = useState<TSignupFormType>(TSignupFormType.SignUp);

  const parentDomainName = import.meta.env.VITE_PARENT_DOMAIN_NAME ?? 'sandbox.nekosgate.com';

  async function createUser() {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api.${parentDomainName}/user/auth/sign-up`,
        { email: email, password: password }
      );
      console.log("User created successfully:", response.data);
      setCurrentForm(TSignupFormType.Verify);
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function verifyAccount() {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api.${parentDomainName}/user/auth/confirm-sign-up`,
        { email: email, code: securityCode }
      );
      console.log("Account verified successfully:", response.data);
    } catch (error) {
      console.error("Error verifying account:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function onClickHandler(event: React.MouseEvent) {
    if (currentForm === TSignupFormType.SignUp) {
      createUser();
    } else {
      verifyAccount();
    }
  }

  return (
    <div>
      {currentForm === TSignupFormType.SignUp && (
        <div>
          <h2>Create an account</h2>
          <div className="mb-3">
            <TextField id="email-address" label="Email Address" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <TextField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
      )}

      {currentForm === TSignupFormType.Verify && (
        <div>
          <h2>Verify Your Account</h2>
          <p>Check your email for the verification code.</p>
          <div className="mb-3">
            <TextField id="security-code" label="Security Code" type="text" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} />
          </div>
        </div>
      )}

      <div className="mb-3">
        <Button loading={isLoading} onClick={onClickHandler} color="primary">
          {currentForm === TSignupFormType.SignUp ? 'Create Account' : 'Verify Account'} <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </div>
  );
};
