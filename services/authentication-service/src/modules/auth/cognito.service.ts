import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class CognitoService {
  private readonly cognitoIdentityServiceProvider: AWS.CognitoIdentityServiceProvider;

  constructor() {
    AWS.config.region = process.env.AWS_REGION ?? 'us-east-2';
    this.cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
  }

  async authenticate(username: string, password: string): Promise<any> {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: 'YOUR_CLIENT_ID',
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
      ClientId: 'YOUR_CLIENT_ID',
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
      ClientId: 'YOUR_CLIENT_ID',
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
      ClientId: 'YOUR_CLIENT_ID',
      Password: password,
      Username: username,
    };

    await this.cognitoIdentityServiceProvider.signUp(params).promise();
  }

  async deleteUser(userId: string): Promise<void> {
    const params = {
      UserPoolId: 'YOUR_USER_POOL_ID',
      Username: userId,
    };

    await this.cognitoIdentityServiceProvider.adminDeleteUser(params).promise();
  }
}
