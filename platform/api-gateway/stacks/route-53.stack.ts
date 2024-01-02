// import * as cdk from 'aws-cdk-lib/core';
// import * as route53 from 'aws-cdk-lib/aws-route53';
// import * as targets from 'aws-cdk-lib/aws-route53-targets';
// import { Construct } from 'constructs';
// import { RestApiBase } from 'aws-cdk-lib/aws-apigateway';

// interface Route53StackProps extends cdk.StackProps {
//   domainName: string,
//   apiGateway: RestApiBase
// }

// export class Route53Stack extends cdk.NestedStack {
//   constructor(scope: Construct, id: string, props: Route53StackProps) {
//     super(scope, id, props);

//     const { domainName, apiGateway } = props;

//     const hostedZone = route53.HostedZone.fromLookup(this, `${id}-hosted-zone`, {
//       domainName: domainName,
//       privateZone: true,
//     });

//     new route53.ARecord(this, `${id}-api-gateway-alias-record`, {
//       zone: hostedZone,
//       recordName: 'api',
//       target: route53.RecordTarget.fromAlias(
//         new targets.ApiGateway(apiGateway),
//       ),
//     });
//   }
// }
