import {
  IsEnum,
  IsDateString,
  IsString,
} from '@cats-cradle/validation-schemas';
import { StatusType } from './status.type';
import { TemplateType } from '../template/templates';

export class SendEmailRequestDto {
  @IsEnum(StatusType)
  public status!: StatusType;

  @IsEnum(TemplateType)
  public template!: TemplateType;

  @IsString()
  public data: string;

  @IsDateString()
  public createdAt!: string;

  @IsDateString()
  public updatedAt!: string;
}
