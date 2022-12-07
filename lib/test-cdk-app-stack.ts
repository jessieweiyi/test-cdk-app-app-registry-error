import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appRegistry from '@aws-cdk/aws-servicecatalogappregistry-alpha';
import { NestedStack } from './nested-stack';

export class TestCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appRegistryApp = new appRegistry.Application(this, 'RegistrySetup', {
      applicationName: 'TestApp',
      description: `Service Catalog application to track and manage all your resources for TestApp`,
    });

    appRegistryApp.associateApplicationWithStack(this);

    const nestedStack1 = new NestedStack(this, 'NestStack1');

    appRegistryApp.associateApplicationWithStack(nestedStack1);
  }
}
