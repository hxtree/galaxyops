import { IsString, IsUrl } from '@galaxyops/validation-schemas';

export class RouteUrlsDto {
  @IsString()
  @IsUrl()
    users_url: string;

  @IsString()
  @IsUrl()
    character_sheets_url: string;

  @IsString()
  @IsUrl()
    email_messages_url: string;

  @IsString()
  @IsUrl()
    html_to_pdf_url: string;

  @IsString()
  @IsUrl()
    instances_url: string;

  @IsString()
  @IsUrl()
    dice_url: string;

  @IsString()
  @IsUrl()
    player_achievements_url: string;
}
