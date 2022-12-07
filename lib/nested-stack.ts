import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';

export class NestedStack extends cdk.NestedStack { 
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'testBucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    }); 
  }
}
