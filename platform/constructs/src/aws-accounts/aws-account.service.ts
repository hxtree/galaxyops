import { awsAccounts, AwsAccountType } from './accounts';

export class AwsAccountService {
  static findByName(name: string): AwsAccountType | undefined {
    return awsAccounts.find((account) => account.name === name);
  }

  static findByAccountId(accountId: string): AwsAccountType | undefined {
    return awsAccounts.find((account) => account.accountId === accountId);
  }

  static findByNameOrFail(name: string): AwsAccountType {
    const account = this.findByName(name);
    if (!account) {
      throw new Error(`Account with name '${name}' not found`);
    }
    return account;
  }

  static findByAccountIdOrFail(accountId: string): AwsAccountType {
    const account = this.findByAccountId(accountId);
    if (!account) {
      throw new Error(`Account with account ID '${accountId}' not found`);
    }
    return account;
  }
}
