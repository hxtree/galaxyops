import { IsString, IsOptional } from '@cats-cradle/validation-schemas';

export class SendEmailCommandDto {
  @IsString({ each: true })
  public toAddresses: string | string[];

  @IsString()
  public fromAddress: string;

  @IsString()
  public subject: string;

  @IsString()
  public htmlMessage: string;

  @IsString()
  public textMessage: string;

  @IsString({ each: true })
  @IsOptional()
  public replyToAddresses?: string | string[];

  @IsString({ each: true })
  @IsOptional()
  public ccAddresses?: string | string[];
}
