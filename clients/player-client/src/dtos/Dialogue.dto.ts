import { IsString, Length } from 'class-validator';

export class Dialogue {
  @IsString()
  actorId: string;

  @IsString()
  @Length(1, 1000)
  text: string;
}
