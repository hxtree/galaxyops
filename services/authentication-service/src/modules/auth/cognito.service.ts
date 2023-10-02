import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class CognitoService {
  private ssm: AWS.SSM;

  private readonly cognitoIdentityServiceProvider: AWS.CognitoIdentityServiceProvider;

  constructor() {
    AWS.config.region = process.env.AWS_REGION ?? 'us-east-2';
    this.ssm = new AWS.SSM();

    this.cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
  }

  async fetchUserPoolId(): Promise<string> {
    const parameterName = 'cognito-user-pool-id';
    const response = await this.ssm
      .getParameter({ Name: parameterName })
      .promise();

    if (response && response.Parameter && response.Parameter.Value) {
      return response.Parameter.Value;
    }

    return Promise.reject(new Error(`Failed to get ${parameterName}`));
  }

  async fetchUserPoolClientId(): Promise<string> {
    const parameterName = 'cognito-user-pool-client-id';
    const response = await this.ssm
      .getParameter({ Name: parameterName })
      .promise();

    if (response && response.Parameter && response.Parameter.Value) {
      return response.Parameter.Value;
    }

    return Promise.reject(new Error(`Failed to get ${parameterName}`));
  }

  async authenticate(username: string, password: string): Promise<any> {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: await this.fetchUserPoolClientId(),
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    };

    const response = await this.cognitoIdentityServiceProvider
      .initiateAuth(params)
      .promise();
    return response.AuthenticationResult;
  }

  async forgotPassword(username: string): Promise<void> {
    const params = {
      ClientId: await this.fetchUserPoolClientId(),
      Username: username,
    };

    await this.cognitoIdentityServiceProvider.forgotPassword(params).promise();
  }

  async resetPassword(
    username: string,
    code: string,
    newPassword: string,
  ): Promise<void> {
    const params = {
      ClientId: await this.fetchUserPoolClientId(),
      ConfirmationCode: code,
      Password: newPassword,
      Username: username,
    };

    await this.cognitoIdentityServiceProvider
      .confirmForgotPassword(params)
      .promise();
  }

  async signUp(username: string, password: string): Promise<void> {
    const params = {
      ClientId: await this.fetchUserPoolClientId(),
      Password: password,
      Username: username,
    };

    await this.cognitoIdentityServiceProvider.signUp(params).promise();
  }

  async deleteUser(userId: string): Promise<void> {
    const params = {
      UserPoolId: await this.fetchUserPoolId(),
      Username: userId,
    };

    await this.cognitoIdentityServiceProvider.adminDeleteUser(params).promise();
  }
}
