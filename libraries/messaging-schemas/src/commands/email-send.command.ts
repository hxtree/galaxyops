import { IsDateString, IsString } from '@cats-cradle/validation-schemas';
import { BaseMessageDto } from '../base';

export class EmailSendCommand extends BaseMessageDto {
  @IsString()
  public template!: string;

  // TODO refine
  @IsString()
  public data: string;

  @IsDateString()
  public createdAt!: string;
}
