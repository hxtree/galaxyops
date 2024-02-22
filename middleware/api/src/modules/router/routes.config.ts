export type RouteDefinition = {
  path: string;
  name: string;
  endpoint: string;
};

export const routes: RouteDefinition[] = [
  {
    name: 'users_url',
    path: '/user',
    endpoint: process.env.USER_SVC_DOMAIN_NAME || '',
  },
  {
    name: 'character_sheets_url',
    path: '/character-sheets',
    endpoint: process.env.CHARACTER_SHEETS_SVC_DOMAIN_NAME || '',
  },
  {
    name: 'email_messages_url',
    path: '/email-message',
    endpoint: process.env.EMAIL_MESSAGE_SVC_DOMAIN_NAME || '',
  },
  {
    name: 'html_to_pdf_url',
    path: '/html-to-pdf',
    endpoint: process.env.HTML_TO_PDF_SVC_DOMAIN_NAME || '',
  },
  {
    name: 'instances_url',
    path: '/instances',
    endpoint: process.env.INSTANCES_SVC_DOMAIN_NAME || '',
  },
  {
    name: 'dice_url',
    path: '/dice',
    endpoint: process.env.LUCK_BY_DICE_SVC_DOMAIN_NAME || '',
  },
  {
    name: 'player_achievements_url',
    path: '/player-achievements',
    endpoint: process.env.PLAYER_ACHIEVEMENTS_SVC_DOMAIN_NAME || '',
  },
  // Add more routes as needed
];
