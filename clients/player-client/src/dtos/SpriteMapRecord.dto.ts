import { IsString, IsUrl } from 'class-validator';

export class SpriteMapRecord {
  @IsString()
  id: string;

  @IsUrl()
  url: string;
}
