#!/usr/bin/env node

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Command } from 'commander';
import { setupAwsHomeDir } from './setup';
import { installAwsCli } from './install-aws-cli';

function main() {
  const program = new Command();

  program
    .name('aws-sso')
    .description('CLI to authenticate CDK with AWS')
    .version('0.0.1');

  program
    .arguments('<profile>')
    .description('Authenticate to AWS SSO and configure AWS CLI credentials.')
    .action(async (profile: string) => {
      try {
        console.log(`Logging in with profile: ${profile}`);

        // Check if AWS CLI is installed
        try {
          execSync('aws --version', { stdio: 'ignore' });
        } catch (error) {
          console.error('AWS CLI is not installed or not found in PATH.');
          installAwsCli();
        }

        setupAwsHomeDir();

        // Execute AWS SSO login
        execSync(`aws sso login --profile ${profile}`, { stdio: 'inherit' });

        // Define AWS CLI cache directory
        const cliCacheDir = path.join(os.homedir(), '.aws/cli/cache');

        // Find latest cache file
        const cacheFiles = fs
          .readdirSync(cliCacheDir)
          .filter(file => file.startsWith('sso-'));

        if (cacheFiles.length === 0) {
          console.error('No AWS CLI cache files found.');
          process.exit(1);
        }

        const latestCacheFile = cacheFiles.sort().reverse()[0];
        const cacheFilePath = path.join(cliCacheDir, latestCacheFile);

        // Read cache file contents
        const cacheFileContents = fs.readFileSync(cacheFilePath, 'utf8');
        const credentials = JSON.parse(cacheFileContents).Credentials;

        // Configure AWS CLI with credentials from cache
        execSync(
          `aws configure set aws_access_key_id ${credentials.AccessKeyId}`,
          { stdio: 'inherit' },
        );
        execSync(
          `aws configure set aws_secret_access_key ${credentials.SecretAccessKey}`,
          { stdio: 'inherit' },
        );
        execSync(
          `aws configure set aws_session_token ${credentials.SessionToken}`,
          { stdio: 'inherit' },
        );

        console.log(
          `Successfully retrieved & cached credentials for: ${profile}`,
        );
      } catch (err) {
        const error = err as Error;
        console.error('An error occurred:', error.message);
        process.exit(1);
      }
    });

  program.parse(process.argv);
}

main();
