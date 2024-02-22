import { Injectable } from '@nestjs/common';
import { SSM } from '@aws-sdk/client-ssm';
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  ConfirmForgotPasswordCommand,
  ForgotPasswordCommand,
  InitiateAuthCommand,
  AdminDeleteUserCommand,
  ConfirmSignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';

@Injectable()
export class CognitoService {
  private ssm: SSM;

  private region: string;

  private cognitoClient: CognitoIdentityProviderClient;

  constructor() {
    this.region = process.env.AWS_REGION ?? 'us-east-1';
    this.ssm = new SSM({ region: this.region });
    this.cognitoClient = new CognitoIdentityProviderClient({
      region: this.region,
    });
  }

  async fetchUserPoolId(): Promise<string> {
    if (process.env.USER_POOL_ID) {
      return process.env.USER_POOL_ID;
    }

    const parameterName = 'USER_POOL_ID';
    const response = await this.ssm.getParameter({ Name: parameterName });

    if (response && response.Parameter && response.Parameter.Value) {
      return response.Parameter.Value;
    }

    return Promise.reject(new Error(`Failed to get ${parameterName}`));
  }

  async fetchUserPoolClientId(): Promise<string> {
    if (process.env.USER_POOL_CLIENT_ID) {
      return process.env.USER_POOL_CLIENT_ID;
    }

    const parameterName = 'USER_POOL_CLIENT_ID';

    const response = await this.ssm.getParameter({ Name: parameterName });

    if (response && response.Parameter && response.Parameter.Value) {
      return response.Parameter.Value;
    }

    return Promise.reject(new Error(`Failed to get ${parameterName}`));
  }

  async authenticate(username: string, password: string): Promise<any> {
    const command = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: await this.fetchUserPoolClientId(),
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    });

    const response = await this.cognitoClient.send(command);
    return response.AuthenticationResult;
  }

  async forgotPassword(username: string): Promise<void> {
    const command = new ForgotPasswordCommand({
      ClientId: await this.fetchUserPoolClientId(),
      Username: username,
    });

    await this.cognitoClient.send(command);
  }

  async resetPassword(
    username: string,
    code: string,
    newPassword: string,
  ): Promise<void> {
    const command = new ConfirmForgotPasswordCommand({
      ClientId: await this.fetchUserPoolClientId(),
      ConfirmationCode: code,
      Password: newPassword,
      Username: username,
    });
    await this.cognitoClient.send(command);
  }

  async signUp(email: string, password: string): Promise<void> {
    const command = new SignUpCommand({
      ClientId: await this.fetchUserPoolClientId(),
      Username: email,
      Password: password,
      UserAttributes: [{ Name: 'email', Value: email }],
    });

    await this.cognitoClient.send(command);
  }

  async confirmSignUp(email: string, code: string): Promise<void> {
    const command = new ConfirmSignUpCommand({
      ClientId: await this.fetchUserPoolClientId(),
      Username: email,
      ConfirmationCode: code,
    });

    await this.cognitoClient.send(command);
  }

  async deleteUser(userId: string): Promise<void> {
    const command = new AdminDeleteUserCommand({
      UserPoolId: await this.fetchUserPoolId(),
      Username: userId,
    });

    await this.cognitoClient.send(command);
  }
}
