import { ApiProperty } from '@nestjs/swagger';

export class DeleteSpawnDto {
  @ApiProperty({
    description: 'The instance of the game.',
  })
  public instanceId?: string;

  @ApiProperty()
  public characterId: string;
}
