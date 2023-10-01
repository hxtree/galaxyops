import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';
import { exit } from 'process';

export interface CognitoPoolProps {
  readonly stage: string;
}

export class CognitoPool extends Construct {
  public cognitoPool: cognito.UserPool;

  public client: cognito.UserPoolClient;

  public userPoolId: string;

  constructor(scope: Construct, id: string, props: CognitoPoolProps) {
    super(scope, id);

    this.cognitoPool = new cognito.UserPool(this, 'CognitoPool', {
      userPoolName: `${props.stage}-CognitoPool`,
      selfSignUpEnabled: true,
      signInCaseSensitive: false,
      signInAliases: {
        email: true,
        phone: true,
      },
      autoVerify: {
        email: true,
      },
      userVerification: {
        emailSubject: 'Cats Cradle User Verification',
        emailBody:
          'Hello, Thanks for registering! Verification code is {####}.',
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      standardAttributes: {
        fullname: {
          required: true,
          mutable: true,
        },
        email: {
          required: true,
          mutable: true,
        },
      },
      customAttributes: {
        company: new cognito.StringAttribute({ mutable: true }),
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_AND_PHONE_WITHOUT_MFA,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    this.client = this.cognitoPool.addClient('AuthenticationClient', {
      userPoolClientName: 'AuthenticationClient',
      oAuth: {
        flows: { authorizationCodeGrant: true },
        scopes: [cognito.OAuthScope.OPENID],
        // TODO pick domain name
        callbackUrls: ['https://catscradle.com/home'],
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
      ],
      refreshTokenValidity: Duration.minutes(60),
      idTokenValidity: Duration.minutes(30),
      accessTokenValidity: Duration.minutes(30),
    });

    this.userPoolId = this.cognitoPool.userPoolId;
  }
}
