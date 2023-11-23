import { IsOptional, IsUuidV4 } from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export class DeleteDto {
  @IsUuidV4()
  @IsOptional()
  @ApiProperty({
    description: 'The playerAchievementId',
    default: v4(),
    type: String,
  })
    id: string;
}
