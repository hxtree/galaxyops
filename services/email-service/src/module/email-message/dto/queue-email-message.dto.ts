import {
  IsEnum,
  IsDateString,
  IsString,
} from '@cats-cradle/validation-schemas';
import { StatusType } from '../types/status.type';

export class QueueEmailMessageDto {
  @IsEnum(StatusType)
  public status!: StatusType;

  @IsString()
  public template!: string;

  @IsString()
  public data: string;

  @IsDateString()
  public createdAt!: string;

  @IsDateString()
  public updatedAt!: string;
}
