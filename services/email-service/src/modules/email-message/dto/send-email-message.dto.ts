import {
  IsEnum,
  IsDateString,
  IsString,
} from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { StatusType } from '../../../models/email-message/status.type';

export class SendEmailMessageDto {
  @IsEnum(StatusType)
  @ApiProperty({
    description: 'Status of the send email request',
    default: StatusType.OPEN,
  })
  public status?: StatusType;

  @IsString()
  public data: string;

  @IsDateString()
  public createdAt!: string;

  @IsDateString()
  public updatedAt!: string;
}
