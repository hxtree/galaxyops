import { IsDateString, IsString } from '@cats-cradle/validation-schemas';

export class EmailSendCommand {
  @IsString()
  public template!: string;

  // TODO refine
  @IsString()
  public data: string;

  @IsDateString()
  public createdAt!: string;
}
