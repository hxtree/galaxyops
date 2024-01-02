// import * as acm from 'aws-cdk-lib/aws-certificatemanager';
// import * as cdk from 'aws-cdk-lib/core';
// import { Construct } from 'constructs';

// interface AcmCertificateStackProps extends cdk.StackProps {
//   domainName: string
// }

// export class AcmCertificateStack extends cdk.NestedStack {
//   public certificate;

//   constructor(scope: Construct, id: string, props: AcmCertificateStackProps) {
//     super(scope, id, props);

//     const {domainName} = props;

//     this.certificate = new acm.Certificate(this, `${id}-certificate`, {
//       domainName: domainName,
//       subjectAlternativeNames: [
//         // add additional domain names (if needed)
//         // TODO use map to generate
//         `www.${domainName}`,
//         `api.${domainName}`,
//       ],
//       validation: acm.CertificateValidation.fromDns(),
//     });
//   }
// }
