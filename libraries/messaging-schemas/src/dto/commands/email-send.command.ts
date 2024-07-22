import { IsDateString, IsString } from '@galaxyops/validation-schemas';
import { BaseCommandDto } from './base-command.dto';

export class EmailSendCommand extends BaseCommandDto {
  @IsString()
  public template!: string;

  // TODO refine
  @IsString()
  public data: string;

  @IsDateString()
  public createdAt!: string;
}
