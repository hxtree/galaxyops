import {
  IsString,
  IsUuidV4,
  ValidateIf,
} from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';

export class QueryImageDto {
  @ValidateIf((o) => !o.key)
  @IsUuidV4()
  @ApiProperty()
    id?: string;

  @ValidateIf((o) => !o.id)
  @IsString()
  @ApiProperty()
    key?: string;
}
