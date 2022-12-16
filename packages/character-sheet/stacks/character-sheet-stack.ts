import {Microservice} from '@org-platform/constructs';
import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import {StackProps} from 'aws-cdk-lib';

export class CharacterSheetStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const microservice = new Microservice(this, 'character-sheet-stack', {});

    const rest = microservice.getRestApi();

    new cdk.CfnOutput(this, 'Localhost API Example', {
      value: `${rest.url}archetype/list`,
    });
  }
}
