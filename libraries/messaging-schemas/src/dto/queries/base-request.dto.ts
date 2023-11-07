import { IsString } from '@cats-cradle/validation-schemas';
import { BaseMessageDto } from '../messages/base-message.dto';

/**
 * Request
 * Publish an async message to a single queue letting them
 * know which queue to send a reply to.
 * > Publisher -> SQS -> Consumer -> (SQS -> Publisher)
 */
export abstract class BaseRequestDto extends BaseMessageDto {
  @IsString()
    replyToQueue: string;
}
