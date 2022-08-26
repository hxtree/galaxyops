// Support

// Party Actions (Slot 4)
// Party – choose to interact with party

export interface Teamwork {
  name: string;
  description: string;
}

export class Command implements Teamwork {
  name: 'Command';
  description: 'tell other party members what actions to use.';
}

export class Formations implements Teamwork {
  name: 'Formations';
  description: 'get part to move to certain areas.';
}
