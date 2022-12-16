import {Microservice} from '@org-platform/constructs';
import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import {StackProps} from 'aws-cdk-lib';

export class LuckByDiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Microservice(this, 'luck-by-dice-stack', {});
  }
}
