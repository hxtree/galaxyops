import {
  IsEnum,
  IsDateString,
  IsString,
} from '@cats-cradle/validation-schemas';
import { StatusType } from '../types/status.type';
import { TemplateType } from '../templates';

export class QueueEmailMessageDto {
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
