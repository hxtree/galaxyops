import { IsOptional, IsUuidV4 } from '@cats-cradle/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export class CreateDto {
  @IsUuidV4()
  @IsOptional()
  @ApiProperty({
    description: 'The playerAchievementId',
    default: v4(),
    type: String,
  })
    id: string;

  @IsUuidV4()
  @ApiProperty({
    description: 'The playerId',
    default: v4(),
    type: String,
  })
    playerId: string;

  @IsUuidV4()
  @ApiProperty({
    description: 'The achievementId',
    default: v4(),
    type: String,
  })
    achievementId: string;
}
