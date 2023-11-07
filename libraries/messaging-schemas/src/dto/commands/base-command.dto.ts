import { BaseMessageDto } from '../messages/base-message.dto';

/**
 * Command
 * Command send a idempotent request to a topic asking
 * subscribers to perform task. The consumer of a command
 * does not inform or provide a response to the publisher.
 * The publisher expects something to occur as a result of
 * the request.
 * > Publisher -> SNS -> SQS -> Consumer
 */
export abstract class BaseCommandDto extends BaseMessageDto {}
