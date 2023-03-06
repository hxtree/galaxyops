import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as atlas from '@mongodbatlas-awscdk/atlas-basic';

export class MongoAtlasCluster extends Construct {
  private mongoAtlas: any;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apiKeys = {
      privateKey: process.env.MONGODB_ATLAS_PRIVATE_KEY as string,
      publicKey: process.env.MONGODB_ATLAS_PUBLIC_KEY as string,
    };
    const orgId = process.env.MONGODB_ATLAS_ORGID as string;
    const dbPassword = process.env.MONGODB_ATLAS_PASSWORD as string;
    const dbUsername = process.env.MONGODB_ATLAS_USERNAME as string;

    this.mongoAtlas = new atlas.AtlasBasic(this, 'atlas-basic', {
      dbUserProps: {
        username: dbUsername,
        databaseName: 'staging',
        password: dbPassword,
        roles: [
          {
            roleName: 'atlasAdmin',
            databaseName: 'admin',
          },
        ],
      },
      clusterProps: {
        replicationSpecs: [
          {
            advancedRegionConfigs: [
              {
                regionName: 'us-east-1',
                electableSpecs: {
                  ebsVolumeType: 'STANDARD',
                  instanceSize: 'M0',
                  nodeCount: 3,
                },
              },
            ],
          },
        ],
        clusterType: 'REPLICASET',
        name: 'staging-cluster',
      },
      projectProps: {
        name: 'staging-project',
        orgId,
        projectApiKeys: [
          {
            key: apiKeys.privateKey,
          },
          {
            key: apiKeys.publicKey,
          },
        ],
      },
    });
  }
}
