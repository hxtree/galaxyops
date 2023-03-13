import { kebabCase, truncate } from 'lodash';

export abstract class BaseEvent {
  /**
   * Get a valid SQS slug
   * {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html}
   */
  static get slug(): string {
    const maxLength = 80;
    return truncate(kebabCase(this.name), {
      length: maxLength,
      omission: '***',
    });
  }
}
