import {Slot} from './gear';
import {Skill, SkillType} from './skill';

/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */

export namespace Discipline {
  export enum Category {
    PROFESSION = 'Profession',
    ARCHETYPE = 'Archetype',
    // Combat Classes
    // Specialty Classes
    // Drive Classes
    // Omega Classes
    //  | Spirit Class | Drive Class | Omega Class
  }

  interface SkillProgressionType {
    level: number;
    skill: SkillType;
  }

  export type Type = {
    name: string;
    description: string;
    category: Category;
    history?: string;
    prerequisites?: Type[]; //Discipline[]; // could also be event like defeated Lawzon, but may be that's too character specific?
    skillProgression?: SkillProgressionType[];
  };

  export const GYMNAST: Type = {
    name: 'Gymnast',
    description: 'Trains in gymnastics.',
    category: Category.PROFESSION,
    skillProgression: [
      {level: 10, skill: Skill.BACK_FLIP},
      {level: 25, skill: Skill.DOUBLE_BACK_FLIP},
      {level: 50, skill: Skill.HIGH_JUMP},
      {level: 70, skill: Skill.CONCENTRATION},
    ],
  };

  export const WIZARD: Type = {
    name: 'Wizard',
    description: 'Studies mysterious forces.',
    category: Category.PROFESSION,
    skillProgression: [
      {level: 10, skill: Skill.GUST},
      {level: 25, skill: Skill.FLARE},
      {level: 50, skill: Skill.HEAL},
      {level: 70, skill: Skill.LIGHT},
    ],
  };

  export const HISTORIAN: Type = {
    name: 'Historian',
    description: 'Studies the world as it was.',
    category: Category.PROFESSION,
    skillProgression: [
      {level: 10, skill: Skill.APPRIASE},
      {level: 25, skill: Skill.SCAN},
      {level: 50, skill: Skill.HERALDIC_LION},
    ],
  };
  export const BODY_BUILDER: Type = {
    name: 'Body Builder',
    description: 'Do you even lift?',
    category: Category.PROFESSION,
    skillProgression: [{level: 50, skill: Skill.SCRIBBLES}],
  };

  // may be anyone can become a cook?>
  export const COOK: Type = {
    name: 'Cook',
    description: 'Prepares and cooks food',
    category: Category.PROFESSION,
    skillProgression: [{level: 10, skill: Skill.PREPARE_FOOD}],
    // todo prepare different food items
  };

  export const CHEERLEADER: Type = {
    name: 'Cheerleader',
    description: 'Cheers their team as a form of encouragement.',
    category: Category.PROFESSION,
    skillProgression: [
      {level: 1, skill: Skill.CHEER},
      {level: 10, skill: Skill.SUPPORT},
      {level: 40, skill: Skill.INSPIRE},
      {level: 50, skill: Skill.HOPE},
    ],
  };

  export const COMMANDER: Type = {
    name: 'Commander',
    description: 'Specialize in giving orders to others.',
    category: Category.ARCHETYPE,
    skillProgression: [
      {level: 1, skill: Skill.BOAST},
      {level: 10, skill: Skill.FORMATIONS},
      {level: 50, skill: Skill.ORDER},
    ],
  };

  export const MAGI: Type = {
    name: 'Magi',
    description: 'Has a basic understanding of Magic',
    category: Category.ARCHETYPE,
    prerequisites: [],
    skillProgression: [],
  };

  export const MAGI_BLACK: Type = {
    name: 'MagiBlack',
    description: 'Specialize destruction Magic',
    history: 'Harnessed from the power of Ouren',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [
      {level: 10, skill: Skill.DARKNESS},
      {level: 25, skill: Skill.DESOLATE},
    ],
  };

  export const MAGI_BLUE: Type = {
    name: 'Magi Blue',
    description: 'Specialize water Magic',
    history: 'Harnessed from the power of Genki',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [
      {level: 10, skill: Skill.RAGE},
      {level: 15, skill: Skill.AQUA},
      {level: 25, skill: Skill.TSUNAMI},
    ],
  };

  export const MAGI_BROWN: Type = {
    name: 'Magi Brown',
    description: 'Specialize rock Magic',
    history: 'Harnessed from the power of Asmin',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [
      {level: 10, skill: Skill.QUAKE},
      {level: 15, skill: Skill.LANDSLIDE},
    ],
  };

  export const MAGI_GREEN: Type = {
    name: 'Magi Green',
    description: 'Specialize time Magic',
    history: 'Harnessed from the power of Void',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [
      {level: 10, skill: Skill.STOP},
      {level: 15, skill: Skill.SLOW},
      {level: 15, skill: Skill.HASTE},
    ],
  };

  export const MAGI_PINK: Type = {
    name: 'Magi Pink',
    description: 'Specialize charm Magic',
    history: 'Harnessed from the power of Suyri',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [
      {level: 10, skill: Skill.CHARM},
      {level: 15, skill: Skill.CHILL},
    ],
  };

  export const MAGI_PURPLE: Type = {
    name: 'Magi Purple',
    description: 'Specialize ??? Magic',
    history: 'Harnessed from the power of Diag',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [{level: 10, skill: Skill.QUAKE}], // TODO CHANGE may be instead of quake do tainted
  };

  export const MAGI_WHITE: Type = {
    name: 'Magi White',
    description: 'Specialize snow Magic',
    history: 'Harnessed from the power of Lawzon',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [
      {level: 10, skill: Skill.BLIZZARD},
      {level: 10, skill: Skill.FROST},
      {level: 10, skill: Skill.CHILL},
    ],
  };

  export const MAGI_YELLOW: Type = {
    name: 'Magi Yellow',
    description: 'Specialize absorption Magic',
    history: 'Harnessed from the power of Wisp',
    category: Category.ARCHETYPE,
    prerequisites: [Discipline.MAGI],
    skillProgression: [
      {level: 10, skill: Skill.DRAIN},
      {level: 25, skill: Skill.LEECH},
      {level: 50, skill: Skill.DRAIN},
    ],
  };

  export const GAURD: Type = {
    name: 'Gaurd',
    description: 'Specialize in protection.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const GUARDIAN: Type = {
    name: 'Gaurdian',
    description: 'Specialize in protection.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const HERO: Type = {
    name: 'Hero',
    description: 'Specialize in saving others.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const KNIGHT: Type = {
    name: 'Knight',
    description: 'A honored fighter for protects the kingdom.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const MECHANIC: Type = {
    name: 'Mechanic',
    description: 'Specializes in electromechanical engineering',
    category: Category.ARCHETYPE,
    skillProgression: [], // Actions: Tools
  };

  export const ROUGE: Type = {
    name: 'Rouge',
    description: 'Specializes sneak attacks and picking locks',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const ROYALTY: Type = {
    name: 'Royalty',
    description: 'Specializes in ruling others',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const REBEL: Type = {
    name: 'Rebel',
    description: 'Rebel',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const SCOUT: Type = {
    name: 'Scout',
    description:
      'Specialize in moving ahead of the party to gathering information and reconnaissance.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const SOLIDER: Type = {
    name: 'Solider',
    description:
      'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.',
    category: Category.ARCHETYPE,
    skillProgression: [{level: 10, skill: Skill.CLEAVE}],
  };

  export const SUMMONER: Type = {
    name: 'Summoner',
    description:
      'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.',
    category: Category.ARCHETYPE,
    skillProgression: [
      {level: 10, skill: Skill.SUMMON},
      {level: 10, skill: Skill.DISMISS},
      {level: 10, skill: Skill.COMMAND},
    ],
  };

  export const THIEF: Type = {
    name: 'Thief',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const WARRIOR: Type = {
    name: 'Warrior',
    description: 'Specializzes in combat on the battlefield.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const XSOLIDER: Type = {
    name: 'XSolider',
    description:
      'Soldiers that have gone against their teachings to gain new skills.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const ASSASSIN: Type = {
    name: 'Assassin',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const HEALER: Type = {
    name: 'Healer',
    description: 'Specialize in healing.',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const BARD: Type = {
    name: 'Bard',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const DUELIST: Type = {
    name: 'Duelist',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const RUNE_KING: Type = {
    name: 'Rune King',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const MAIDEN: Type = {
    name: 'Madien',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const Keeper: Type = {
    name: 'Keeper',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const SAGE: Type = {
    name: 'Sage',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const POSSESSED: Type = {
    name: 'Possessed',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const NINJA: Type = {
    name: 'Ninja',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const AMBER_ASSASSIN: Type = {
    name: 'Amber Assassin',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const ELITE_ASSASSIN: Type = {
    name: 'Elite Assassin',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };
  export const ENGINEER: Type = {
    name: 'Engineer',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const BERSERKER: Type = {
    name: 'Berserker',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const ONI: Type = {
    name: 'Oni',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const KEEPER: Type = {
    name: 'Keeper',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const LIGHTENING_WARRIOR: Type = {
    name: 'Lightening Warrior',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };

  export const OUROBOROS: Type = {
    name: 'Ouroboros',
    description: '',
    category: Category.ARCHETYPE,
    skillProgression: [],
  };
}
