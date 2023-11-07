import { BaseMessageDto } from '../messages/base-message.dto';

/**
 * Reply
 * A reply is a response to a request publish an message
 * to a single queue as request.
 * > (Publisher -> SQS) -> Consumer -> SQS -> Publisher
 */
export abstract class BaseReplyDto extends BaseMessageDto {}
