#!/usr/bin/env node
// import * as cdk from 'aws-cdk-lib';
// import { MainStack } from '../stacks/main.stack';
import { awsAccounts } from '@cats-cradle/constructs';

// const app = new cdk.App();
// new MainStack(app, 'certs-main-stack');

// // new MainStack(app, 'certs-main-stack', {
// //   // env: {
// //   //   account: awsAccounts.dev.accountId,
// //   //   region: awsAccounts.dev.region
// //   // }
// // }
// // );

import * as cdk from 'aws-cdk-lib';
import { ApiGatewayStack } from '../stacks/main.stack';

const app = new cdk.App();
new ApiGatewayStack(app, 'ApiGatewayStack');
// ,
// {
//     env: {
//       account: awsAccounts.dev.accountId,
//       region: awsAccounts.dev.region
//     }
//   }
// );
