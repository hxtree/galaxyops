/**
 * Skills are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
export interface Skill {
  name: string;
}

export class DualWeld implements Skill {
  name: 'Dual Weld';
  description: 'Can use two one handed weapons at once.';
  // " Both malace and penny can learn this.
}

export class EscapeArtist implements Skill {
  name: 'EscapeArtist';
  description: 'Makes it easier to run away from aggresive targets';
}

export class Intimidate implements Skill {
  name: 'Intimidate';
  description: 'Causes fear in enemy';
}

export class Concentration implements Skill {
  name: 'Concentration';
  description: 'Stay focused';
}

export class Bluff implements Skill {
  name: 'Bluff';
  description: 'Tell a lie without being caught';
}

export class SenseBluff implements Skill {
  name: 'SenseBluff';
  description: 'A little icon on the screen will tell if someone is trying to bluff party (if character beats bluff check).';
}
