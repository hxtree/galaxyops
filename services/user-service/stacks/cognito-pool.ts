import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export interface CognitoPoolProps {
  readonly stage: string;
}

/**
 * A User Pool is a user directory that helps you manage and authenticate users.
 * It stores user attributes such as username, email, and phone number.
 */
export class CognitoPool extends Construct {
  public cognitoPool: cognito.UserPool;

  public client: cognito.UserPoolClient;

  constructor(scope: Construct, id: string, props: CognitoPoolProps) {
    super(scope, id);

    this.cognitoPool = new cognito.UserPool(this, 'CognitoPool', {
      userPoolName: `${props.stage}-CognitoPool`,
      selfSignUpEnabled: true,
      signInCaseSensitive: false,
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      userVerification: {
        emailSubject: 'NekosGate User Verification',
        emailBody:
          'Hello, Thanks for registering! Verification code is {####}.',
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
      },
      customAttributes: {
        userId: new cognito.StringAttribute({ mutable: true }),
        company: new cognito.StringAttribute({ mutable: true }),
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_AND_PHONE_WITHOUT_MFA,
      deletionProtection: false,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    this.client = this.cognitoPool.addClient('AuthenticationClient', {
      userPoolClientName: 'AuthenticationClient',
      authFlows: {
        // Enable USER_PASSWORD_AUTH flow
        userPassword: true,
      },
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.OPENID],
        callbackUrls: ['https://catscradle.com/home'],
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
      ],
      refreshTokenValidity: Duration.minutes(60),
      idTokenValidity: Duration.minutes(30),
      accessTokenValidity: Duration.minutes(30),
    });
  }
}
