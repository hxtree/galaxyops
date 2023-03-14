import { kebabCase, truncate } from 'lodash';

export class BaseMessage {
  /**
   * Get a the SNS topic name which is prefixed by STAGE
   * {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html}
   * {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-queues.html}
   */
  get topicName(): string {
    const stage = (process.env.STAGE ?? 'default').toLowerCase();
    const className = this.constructor.name;
    const classNameKebabCase = kebabCase(className);
    let topicName = truncate(`${stage}-${classNameKebabCase}`, {
      length: 256 - '-topic'.length,
      omission: '-topic',
      separator: '-',
    });
    if (!/-topic$/.test(topicName)) {
      topicName += '-topic';
    }

    return topicName;
  }

  /**
   * Get a the SQS queue name which is prefixed by STAGE and service APP_NAME
   * {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html}
   * {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-queues.html}
   */
  get queueName(): string {
    const stage = (process.env.STAGE ?? 'default').toLowerCase();
    const appName = (process.env.APP_NAME ?? 'undefined').toLowerCase();
    const className = this.constructor.name;
    const classNameKebabCase = kebabCase(className);
    let queueName = truncate(`${stage}-${appName}-${classNameKebabCase}`, {
      length: 80 - '-queue'.length,
      omission: '-queue',
      separator: '-',
    });
    if (!/-queue$/.test(queueName)) {
      queueName += '-queue';
    }

    return queueName;
  }
}
