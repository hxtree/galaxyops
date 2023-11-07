import { BaseMessageDto } from '../messages/base-message.dto';

/**
 * Event
 * Events are published to a SNS topic informing any subscribers
 * that something occurred within a given system. Events published
 * may be significant events that were published only for the
 * purpose of data retention and analytic purposes.
 * > Publisher -> SNS -> SQS -> Consumer
 */
export abstract class BaseEventDto extends BaseMessageDto {}
